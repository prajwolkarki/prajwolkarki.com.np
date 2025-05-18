import { Lightbulb, MoonStar } from 'lucide-react';
import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import Typed from 'typed.js';

type CommandKey = 'help' | 'whoami' | 'projects' | 'skills' | 'clear' | 'hi';

type OutputItem = {
    command: string;
    response: string;
};

const commands: Record<Exclude<CommandKey, 'projects'>, string> = {
    hi: `
      👋 Hey there! Let's say hello in a few different languages:<br><br>
      - <span class="text-blue-400">English</span>: Hello from Nepal!<br>
      - <span class="text-blue-400">Nepali</span>: नमस्ते from Nepal!<br>
      - <span class="text-blue-400">Spanish</span>: ¡Hola from Nepal!<br>
      - <span class="text-blue-400">French</span>: Bonjour from Nepal!<br>
      - <span class="text-blue-400">German</span>: Hallo from Nepal!<br>
      - <span class="text-blue-400">Japanese</span>: こんにちは (Konnichiwa) from Nepal!<br>
      - <span class="text-blue-400">Korean</span>: 안녕하세요 (Annyeonghaseyo) from Nepal!<br><br>
      🌍 No matter where you're from, you're always welcome here! 😊
    `,
    help: 'Available commands:<br><span class="text-yellow-400">hi</span> - Greet in multiple languages<br><span class="text-yellow-400">whoami</span> - About Prajwol<br><span class="text-yellow-400">projects</span> - List my projects<br><span class="text-yellow-400">skills</span> - My tech stack<br><span class="text-yellow-400">clear</span> - Clear the terminal',
    whoami: 'Prajwol Karki, Software Developer from Kathmandu, Nepal. Passionate about coding, problem-solving, and building innovative solutions.',
    skills: 'Tech Stack:<br>- Languages: PHP, Python, C, C++, JavaScript<br>- Frameworks: React, NextJS<br>- Tools: Linux, Git, GitLab, Docker',
    clear: '',
};

const Terminal = () => {
    const [input, setInput] = useState<string>('');
    const [output, setOutput] = useState<OutputItem[]>([]);
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');

    const inputRef = useRef<HTMLInputElement>(null);
    const outputRef = useRef<HTMLDivElement>(null);
    const typedRef = useRef<Typed | null>(null);

    useEffect(() => {
        const storedTheme = localStorage.getItem('terminal-theme');
        if (storedTheme === 'light' || storedTheme === 'dark') {
            setTheme(storedTheme);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('terminal-theme', theme);
    }, [theme]);

    useEffect(() => {
        const options = {
            strings: [
                "Welcome to Prajwol's Portfolio Terminal!^500<br>Type <span class=\"text-yellow-400\">help</span> to see available commands.",
            ],
            typeSpeed: 50,
            showCursor: false,
            onComplete: () => {
                inputRef.current?.focus();
            },
        };
        if (outputRef.current) {
            typedRef.current = new Typed(outputRef.current, options);
        }

        return () => {
            typedRef.current?.destroy();
        };
    }, []);


    const fetchGitHubProjects = async (): Promise<string> => {
        try {
            const res = await fetch('https://api.github.com/users/prajwolkarki/repos');
            const data = await res.json();

            if (!Array.isArray(data)) {
                return 'Failed to fetch projects from GitHub.';
            }

            const randomProjects = data
                .sort(() => 0.5 - Math.random())
                .slice(0, 5)
                .map(
                    (repo) =>
                        `- <a href="${repo.html_url}" target="_blank" class="underline text-blue-400">${repo.name}</a>: ${repo.description || 'No description'}`
                )
                .join('<br>');

            return `My selected projects:<br>${randomProjects}<br>Check more on <a href="https://github.com/prajwolkarki" target="_blank" class="underline text-blue-400">GitHub</a>.`;
        } catch (err) {
            return 'Error fetching GitHub projects.';
        }
    };

    const handleCommand = async (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            let response: string;

            if (cmd === 'clear') {
                setOutput([]);
                setInput('');
                return;
            }

            if (cmd === 'projects') {
                response = await fetchGitHubProjects();
            } else if (cmd in commands) {
                response = commands[cmd as Exclude<CommandKey, 'projects'>];
            } else {
                response = `Command not found: ${cmd}. Type <span class="text-yellow-400">help</span> for available commands.`;
            }

            setOutput((prev) => [
                ...prev,
                { command: `prajwol@portfolio:~$ ${cmd}`, response },
            ]);
            setInput('');

            setTimeout(() => {
                if (outputRef.current) {
                    outputRef.current.scrollTop = outputRef.current.scrollHeight;
                }
            }, 0);
        }
    };

    return (
        <div
            className={`w-full flex flex-col rounded-lg shadow-lg overflow-hidden font-mono ${
                theme === 'dark'
                    ? 'bg-black text-green-400'
                    : 'bg-white text-gray-800 border border-gray-300'
            }`}
        >
            <div
                className={`w-full flex items-center p-2 ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
                }`}
            >
                <div className="flex space-x-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <span className="ml-4 text-sm">
                    prajwol@portfolio:~$
                </span>
                <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="ml-auto text-xs text-white bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
                >
                    {theme === 'dark' ? <Lightbulb size={12}/> : <MoonStar size={12}/>}
                </button>
            </div>

            <div
                ref={outputRef}
                className={`w-full p-4 h-70 overflow-y-auto text-sm ${
                    theme === 'dark' ? 'bg-black' : 'bg-white'
                }`}
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
            >
                {output.map((item, index) => (
                    <div key={index} className="mb-2">
                        <p>{item.command}</p>
                        <p dangerouslySetInnerHTML={{ __html: item.response }} />
                    </div>
                ))}
            </div>

            <div
                className={`w-full flex items-center p-2 ${
                    theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
                }`}
            >
                <span
                    className={`mr-2 ${
                        theme === 'dark' ? 'text-green-400' : 'text-gray-800'
                    }`}
                >
                    prajwol@portfolio:~$
                </span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleCommand}
                    className={`flex-1 bg-transparent outline-none ${
                        theme === 'dark' ? 'text-green-400' : 'text-black'
                    }`}
                    autoFocus
                />
            </div>
        </div>
    );
};

export default Terminal;
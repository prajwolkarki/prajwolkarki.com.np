import { Lightbulb, MoonStar } from 'lucide-react';
import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import Typed from 'typed.js';

type CommandKey = 'help' | 'whoami' | 'projects' | 'skills' | 'clear' | 'hi' | 'ai';

type OutputItem = {
  command: string;
  response: string;
};

const commands: Record<Exclude<CommandKey, 'projects' | 'ai'>, string> = {
  hi: `👋 Hello in multiple languages...`,
  help: 'Available commands: hi, whoami, projects, skills, clear, ai',
  whoami: 'Prajwol Karki...',
  skills: 'Languages: PHP, JS...',
  clear: '',
};

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<OutputItem[]>([]);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('terminal-theme');
    if (saved === 'dark' || saved === 'light') setTheme(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('terminal-theme', theme);
  }, [theme]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Welcome to Prajwol's Portfolio Terminal!<br>Type <span class='text-yellow-400'>help</span> to see available commands."],
        typeSpeed: 40,
        onComplete: () => {
          if (inputRef.current) {
            const inputElem = inputRef.current;
            inputElem.focus();
            const val = inputElem.value;
            inputElem.value = '';
            inputElem.value = val;
          }
          setOutput([
            {
              command: '',
              response: typedRef.current?.innerHTML || '',
            },
          ]);
        },
      });

      return () => typed.destroy();
    }
  }, []);

  const fetchGitHubProjects = async (): Promise<string> => {
    try {
      const res = await fetch('https://api.github.com/users/prajwolkarki/repos?per_page=100');
      const data = await res.json();

      if (!Array.isArray(data)) return 'Failed to fetch projects.';

      const topProjects = data
        .filter((repo) => !repo.fork) 
        .sort((a, b) => {
          if (b.stargazers_count !== a.stargazers_count) {
            return b.stargazers_count - a.stargazers_count;
          }
          return b.forks_count - a.forks_count;
        })
        .slice(0, 5);

      return `My top projects:<br>${topProjects
        .map(
          (repo) =>
            `- <a href="${repo.html_url}" target="_blank" class="underline text-blue-400">${repo.name}</a>: ${repo.description || 'No description'}`
        )
        .join('<br>')}<br><br>More at <a href="https://github.com/prajwolkarki" class="underline text-blue-400" target="_blank">GitHub</a>.`;
    } catch {
      return 'Error fetching GitHub projects.';
    }
  };
  const fetchAIResponse = async (input: string): Promise<string> => {
    const apiKey = 'AIzaSyAOK7b4ofZOiRyXcnvLNhIl0mI1xvvaRcs';
    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: input }],
            },
          ],
        }),
      });
  
      const data = await res.json();
  
      const content = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  
      return content || 'No response from Gemini.';
    } catch (error) {
      console.error(error);
      return 'Error calling Gemini API.';
    }
  };
  
  const handleCommand = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;

    const cmd = input.trim();
    const [baseCmd, ...args] = cmd.split(' ');
    const argText = args.join(' ');
    let response = '';

    if (baseCmd === 'clear') {
      setOutput([]);
      setInput('');
      return;
    }

    if (baseCmd === 'projects') {
      response = await fetchGitHubProjects();
    } else if (baseCmd === 'ai') {
      response = await fetchAIResponse(argText || 'Say something!');
    } else if (baseCmd in commands) {
      response = commands[baseCmd as keyof typeof commands];
    } else {
      response = `Command not found: ${baseCmd}. Type <span class="text-yellow-400">help</span>.`;
    }

    setOutput((prev) => [...prev, { command: `prajwol@portfolio:~$ ${cmd}`, response }]);
    setInput('');
    setTimeout(() => {
      outputRef.current?.scrollTo(0, outputRef.current.scrollHeight);
    }, 0);
  };

  return (
    <div className={`w-full rounded-lg font-mono shadow-lg ${theme === 'dark' ? 'bg-black text-green-400' : 'bg-white text-gray-800 border'}`}>
      <div className={`flex items-center p-2 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 bg-yellow-500 rounded-full" />
          <span className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <span className="ml-4 text-sm">prajwol@portfolio:~$</span>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="ml-auto px-2 py-1 text-xs bg-gray-700 text-white rounded hover:bg-gray-600"
        >
          {theme === 'dark' ? <Lightbulb size={12} /> : <MoonStar size={12} />}
        </button>
      </div>

      <div
        ref={outputRef}
        className="p-4 h-72 overflow-y-auto text-sm scrollbar-hide"
      >
        {output.length === 0 && <span ref={typedRef} />}
        {output.map((item, index) => (
          <div key={index} className="mb-2">
            {item.command && <p>{item.command}</p>}
            <p dangerouslySetInnerHTML={{ __html: item.response }} />
          </div>
        ))}
      </div>

      <div className={`flex items-center p-2 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <span className={`mr-2 ${theme === 'dark' ? 'text-green-400' : 'text-gray-800'}`}>prajwol@portfolio:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          className={`flex-1 bg-transparent outline-none ${theme === 'dark' ? 'text-green-400' : 'text-black'}`}
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;

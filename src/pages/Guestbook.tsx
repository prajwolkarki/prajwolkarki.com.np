import { signInWithPopup, User } from "firebase/auth";
import { auth, googleProvider, db, githubProvider } from "../firebase";
import { useState, useEffect } from "react";
import { SiGithub, SiGoogle } from "react-icons/si";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  addDoc,
  collection,
  orderBy,
  query,
  getDocs,
  OrderByDirection,
} from "firebase/firestore";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "react-toastify";

const Guestbook = () => {
  const [user, setUser] = useState<User | null>(null);
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<any[]>([]);
  const [order, setOrder] = useState<OrderByDirection>("desc");

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(
        auth,
        googleProvider,
      );
      setUser(result.user);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };
  const handleGithubSignIn = async () => {
    try {
      const result = await signInWithPopup(
        auth,
        githubProvider,
      );
      setUser(result.user);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, "messages"), {
        message,
        user: {
          uid: user?.uid,
          displayName: user?.displayName,
          photoURL: user?.photoURL,
        },
        timestamp: new Date(),
      });
      toast.success(`Message Sent Successfully`);
      fetchMessages();
      setMessage("");
    } catch (error) {
      console.error("Error submitting message:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const fetchMessages = async () => {
    try {
      const messagesRef = collection(db, "messages");
      const q = query(messagesRef, orderBy("timestamp", order));
      const snapshot = await getDocs(q);
      const messages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // console.log(messages);
      setMessages(messages);
    } catch (error) {
      console.log("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [order]);

  return (
    <div className="w-full px-5 flex flex-col py-4">
      <h2 className="font-tagesschrift font-bold text-2xl">Guestbook</h2>
      <p className="text-slate-600 tracking-tighter">
        Feel free to leave a comment below — it can be anything you like! Share
        your thoughts, whether it's a compliment, a piece of advice, some
        wisdom, constructive criticism, or even a bit of humor. Surprise me!
      </p>

      <div className="bg-[#F1E5D1] px-5 py-6 rounded-md mt-5 shadow-md flex flex-col">
        {!user ? (
          <div className="flex flex-col">
            <h1 className="text-xl font-tagesschrift font-bold">
              Sign the Guestbook
            </h1>
            <p className="text-slate-600 mb-4">
              Please log in below to share a message for future visitors
            </p>
            <div className="flex flex-col space-y-1.5 w-full md:flex-row mx-auto md:space-x-4 justify-center items-center mt-4 mb-2"> 
              <div className="flex items-center relative self-center">
                <Button
                  className="bg-[#dd4b39] w-[200px] text-white px-7 py-3 rounded-lg hover:bg-[#e74c3c] hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none relative z-0"
                  onClick={handleGoogleSignIn}
                >
                  <SiGoogle className="absolute left-2 text-white text-sm z-10" />
                  Google
                </Button>
              </div>
              <div className="flex items-center relative self-center">
                <SiGithub className="absolute left-2 text-white text-sm z-10" />
                <Button
                  className="bg-[#333333] w-[200px] text-white px-7 py-3 rounded-lg hover:bg-[#444444] hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none relative z-0"
                  onClick={handleGithubSignIn}
                >
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="flex flex-row items-center space-x-3 text-black font-tagesschrift">
              <Avatar>
                <AvatarImage src={user?.photoURL ?? ""} />
                <AvatarFallback>
                  {user?.displayName?.slice(0, 1) ?? ""}
                </AvatarFallback>
              </Avatar>
              <p className="font-semibold tracking-wide capitalize">
                {user?.displayName ?? "Unknown User"}
              </p>
            </div>
            <Textarea
              className="mt-4 w-full h-25 resize-none border-1 border-black dark:text-black"
              placeholder="Leave a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="flex flex-col md:flex-row  md:space-x-4 justify-center">
              <Button
                className="mt-4 w-full md:w-[300px] self-center bg-[#606c38] hover:bg-[#606c38]/80"
                onClick={handleSubmit}
              >
                Send Message
              </Button>
              <Button
                variant="outline"
                className="mt-4  w-full md:w-[300px] self-center dark:text-black dark:border-black dark:hover:bg-black dark:hover:text-white"
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-end mt-2">
        <Select onValueChange={(value) => setOrder(value as OrderByDirection)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Descending" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="asc">Ascending</SelectItem>
              <SelectItem value="desc">Descending</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        {messages.map((message) => (
          <div
            key={message.id}
            className="px-5 py-5 rounded-md mt-5 shadow-sm flex flex-col border-1 border-slate-300"
          >
            <div className="flex flex-row items-center space-x-3">
              <Avatar>
                <AvatarImage src={message?.user?.photoURL} />
                <AvatarFallback>
                  {message?.user?.displayName.slice(0, 1)}
                </AvatarFallback>
              </Avatar>
              <div className="font-semibold tracking-wide capitalize">
                {message.user.displayName}
                <p className="text-[12px] text-gray-600">
                  {new Date(message.timestamp.seconds * 1000).toLocaleString()}
                </p>
              </div>
            </div>
            <p className="mt-4">{message.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guestbook;

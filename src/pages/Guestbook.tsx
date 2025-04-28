import { signInWithPopup, User } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { useState, useEffect } from "react";
import { SiGoogle } from "react-icons/si";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Guestbook = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full px-5 flex flex-col py-4">
      <h2 className="font-tagesschrift font-bold text-2xl">Guestbook</h2>
      <p className="text-slate-600 tracking-tighter">
        Feel free to leave a comment below — it can be anything you like! Share
        your thoughts, whether it's a compliment, a piece of advice, some
        wisdom, constructive criticism, or even a bit of humor. Surprise me!
      </p>

      <div className="bg-[#fefae0] px-5 py-6 rounded-md mt-5 shadow-md flex flex-col">
        {!user ? (
          <div className="flex flex-col">
            <h1 className="text-xl font-tagesschrift font-bold">
              Sign the Guestbook
            </h1>
            <p className="text-slate-600 mb-4">
              Please log in below to share a message for future visitors
            </p>
            <div className="flex items-center relative self-center">
              <SiGoogle className="absolute left-2 text-white text-sm" />
              <Button className="bg-[#dda15e] px-7 hover:bg-[#e6c300]" onClick={handleSignIn}>Google</Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="flex flex-row items-center space-x-3">
              <img
                src={user?.photoURL || ""}
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <p className="font-semibold tracking-wide">{user?.displayName}</p>
            </div>
            <Textarea
              className="mt-4 w-full h-25 resize-none"
              placeholder="Leave a message..."
            />
            <div className="space-x-4 flex justify-center">
              <Button className="mt-4 w-[300px] self-center bg-[#606c38]">
                Send Message
              </Button>
              <Button
                variant="outline"
                className="mt-4 w-[300px] self-center "
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Guestbook;

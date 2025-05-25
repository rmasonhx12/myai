import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  // Placeholder authentication logic
  const signedIn = true; //simulating login placeholder

  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-300 text-white flex justify-between items-center py-5 px-4 md:px-8">
      <div>
        <Link href="/" className="text-lg font-semibold">
          myAI
        </Link>
      </div>

      {signedIn ? (
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link href="/summarize" className="hover:underline">
            Summarize
          </Link>
          <Link href="/history" className="hover:underline">
            History
          </Link>
          <Button className="bg-blue-400 hover:bg-blue-500">Log Out</Button>
        </div>
      ) : (
        <div>
          <Button className="bg-blue-500 hover:bg-blue-600">Sign In</Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;

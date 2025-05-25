// navbar component
import Link from "next/link";
const Navbar = () => {
    return (
         <div className="bg-gradient-to-r from-blue-900 to-blue-300 text-white flex justify-between items-center py-5 px-4 md:px-8">
            
            <div>
                <Link href="/" className="text-lg font-semibold">
                myAI
                </Link>
                </div>
                <div>Sign In</div>
             </div>
    );
};

export default Navbar;
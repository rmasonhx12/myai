// navbar component
import Link from "next/link";
const Navbar = () => {
    return (
         <div className="bg-black text-white flex justify-between items-center py-5 px-4 md:px-8">
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
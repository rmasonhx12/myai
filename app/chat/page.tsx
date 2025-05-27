//chat page
"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, } from "@/components/ui/dialog";
import { useState } from "react";


const ChatPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#f5f5f5] flex flex-col justify-center items-center px-4 md:px-12 h-[90vh]">
      <div className="bg-white w-full h-[70vh] shadow-md rounded-2xl flex p-2">
        <textarea
         disabled
          className="w-full rounded-r-2xl p-5 resize-none focus:outline-none hidden md:inline-flex"
          placeholder='Enter or paste your text and press "Generate Requirements"'
        />
      </div>
      <Button className="mt-8" onClick={() => setOpen(!open)}>
        Generate Summary
      </Button>

      <Dialog open={open}onOpenChange={setOpen}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Sign In with Google</DialogTitle>
                <DialogDescription>Please sign in to access the chat ui feature. Logging insures a personalized experience and saves you progress.</DialogDescription>
                <div className="flex justify-center items-center mt-8">
                    <Button>
                        <svg xmlns="http://www.w3/org/2000/svg" 
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 48 48"
                        >
                        <path 
                        fill ="#FFC107"
                    
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,
                        8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,
                        3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,
                        8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z">
                        </path>
                        <path 
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,
                        0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z">
                        </path>
                        </svg>
                        Sign In with Google
                    </Button>
                </div>
            </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChatPage;

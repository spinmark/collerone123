import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./button";
import LoginModal from "../Login";
import SignUp from "../SignUp";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { useState } from "react";

const Header = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const Navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 w-full glass-effect shadow-soft">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => Navigate('/')}>
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent hidden sm:block">
            ServiceHub
          </span>
        </div>

        {/* Profile */}
        <Button
          variant="ghost"
          size="icon"
          className="w-20 h-20 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
          onClick={() => setOpenLogin(true)}
        >
          <User className="w-28 h-28 text-black stroke-[1.5]" />

        </Button>

      </div>
      <AlertDialog open={openSignup} onOpenChange={setOpenSignup}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>SignUp
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpenSignup(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-[30px] hover:bg-transparent"
              >
                &times;
              </Button>
            </AlertDialogTitle>
            <AlertDialogDescription>
              <div>
                <SignUp setOpenSignup={setOpenSignup} setOpenLogin={setOpenLogin} />
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog open={openLogin} onOpenChange={setOpenLogin}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Login
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpenLogin(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-[30px] hover:bg-transparent"
              >
                &times;
              </Button>
            </AlertDialogTitle>
            <AlertDialogDescription>
              <div>
                <LoginModal setOpenSignup={setOpenSignup} setOpenLogin={setOpenLogin} />
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </header>
  );
};

export default Header;

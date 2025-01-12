import { Bitcoin } from "lucide-react";
import { ModeToggle } from "./theme/mode-toggle";
import { Button, buttonVariants } from "./ui/button";

const Header = () => {
  return (
    <nav
      className="
            supports-backdrop-blur:bg:background/60
            fixed left-0 right-0 top-0 z/20
            border-b bg-background/95 backdrop-blur
            w-full flex py-2.5 px-5 justify-between"
    >
      <div className="flex align-items gap-x-2">
        <Button asChild variant="ghost">
          <a href="#">
            <Bitcoin />
            <h1 className="pl-0.5 text-lg font-semibold">Crypto</h1>
          </a>
        </Button>
      </div>
      <div className="flex align-items gap-x-2">
        <ModeToggle />
        <a href="#" className={buttonVariants({ variant: "default" })}>
          Tickets
        </a>
      </div>
    </nav>
  );
};

export { Header };

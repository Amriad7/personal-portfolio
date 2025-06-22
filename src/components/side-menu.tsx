import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import Fancy from "./ui/fancy";
import Logo from "./ui/logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import NavMenu from "./ui/nav-menu";

const SideMenu = () => {
  return (
    <div>
      <Sheet>
        <Button variant={"secondary"} className="size-9 sm:size-10" asChild>
          <SheetTrigger>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-gray-50"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </SheetTrigger>
        </Button>
        <SheetContent className="dark bg-background gap-0">
          <SheetHeader>
            <SheetTitle className="flex items-center justify-start gap-4">
              <Logo />
              <Fancy className="text-lg md:text-xl font-bold">Amriad</Fancy>
            </SheetTitle>
            <SheetDescription className="sr-only">
              Navigation Menu
            </SheetDescription>
          </SheetHeader>
          <Separator />
          <NavMenu orientation="vertical" />
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default SideMenu;

import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const SideMenu = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Button variant={"secondary"} size={"icon"}>
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
          </Button>
        </SheetTrigger>
        <SheetContent></SheetContent>
      </Sheet>
    </div>
  );
};
export default SideMenu;

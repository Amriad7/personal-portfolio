import Sidebar from "@/components/admin/side-bar";
import { Outlet } from "react-router";

const Admin = () => {
  return (
    <div className="relative bg-background text-foreground font-nunito ">
      <main className="flex justify-start items-stretch min-h-screen">
        <Sidebar />
        <div className="flex-1 ">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
export default Admin;

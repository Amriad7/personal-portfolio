import Header from "./components/header";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="dark bg-background text-foreground font-nunito">
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}

export default App;

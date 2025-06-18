import Header from "./components/header";
import { Outlet } from "react-router";
import Home from "./pages/home";

function App() {
  return (
    <div className="dark bg-background text-foreground font-nunito">
      {/* <Header /> */}
      <main className="min-h-screen">
        <Home />
        {/* <Outlet /> */}
      </main>
    </div>
  );
}

export default App;

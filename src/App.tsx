import Footer from "./components/footer";
import Header from "./components/header";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="relative bg-background text-foreground font-nunito flex flex-col justify-between min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import Footer from "./components/footer";
import Header from "./components/header";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="dark relative bg-background text-foreground font-nunito flex flex-col justify-between min-h-screen">
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

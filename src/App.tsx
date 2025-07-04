import { useEffect } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import { Outlet } from "react-router";
import ga4 from "react-ga4";

function App() {
  useEffect(() => {
    console.log("GA Pageview Sent");
    ga4.send({ hitType: "pageview", page: window.location.pathname });
  });

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

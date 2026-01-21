import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Jobs from "./Jobs";
import Applied from "./Applied";
import { BrowserRouter,Routes,Route } from "react-router";


function Main() {
    return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/applied" element={<Applied />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>

    )
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <Main/>
)
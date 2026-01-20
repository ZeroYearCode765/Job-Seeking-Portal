import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Jobs from "./Jobs";
import Applied from "./Applied";
import { BrowserRouter,Routes,Route } from "react-router";

function Main() {
    return (
        <>
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route path="/jobs" element= {<Jobs/>}>Jobs</Route>
                <Route path="/Applied" element = {<Applied/>}>AppliedJobs</Route>
            </Routes>
        </BrowserRouter>

        </>

    )
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <Main/>
)
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import "./index.css";

import Navbar from "./components/Navbar";

import Home from "./section/Home";
import Service from "./section/Service";
import Project from "./section/Project";
import Contact from "./section/Contact";


/* ================= MAIN PORTFOLIO PAGE ================= */

function PortfolioPage() {

    return (
        <>
            <Navbar />

            <Home />

            <Service />

            <Project />

            <Contact />
        </>
    );
}

/* ================= RENDER ================= */

createRoot(
    document.getElementById("root")!
).render(

    <StrictMode>

        <BrowserRouter>

            <Routes>

                {/* MAIN PAGE */}
                <Route
                    path="/"
                    element={<PortfolioPage />}
                />

               

            </Routes>

        </BrowserRouter>

    </StrictMode>
);
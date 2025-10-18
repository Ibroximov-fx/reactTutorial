import { Route, Routes } from "react-router-dom";
import About from "./pages/about.jsx";
import Phone from "./pages/phone.jsx";
import Error from "./error/error.jsx";
import MiniAbout from "./components/miniAbout.jsx";
export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/phone" element={<Phone />}>
                    <Route path="miniAbout" element={<MiniAbout />} />
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
}

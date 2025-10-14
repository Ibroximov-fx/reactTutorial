import { Route, Routes } from "react-router-dom";
import About from "./pages/about.jsx";
import Phone from "./pages/phone.jsx";
import Error from "./error/error.jsx";
export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/phone" element={<Phone />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
}

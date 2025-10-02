import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Github from "./pages/Github"
import Skills from "./pages/Skills";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        {/* Navbar */}
        <nav className="bg-pink-100 shadow-md p-4 flex justify-center gap-8">
          <NavLink to="/" className="hover:text-blue-600 font-semibold">Home</NavLink>
          <NavLink to="/about" className="hover:text-blue-600 font-semibold">Om mig</NavLink>
          <NavLink to="/github" className="hover:text-blue-600 font-semibold">GitHub</NavLink>
          <NavLink to="/skills" className="hover:text-blue-600 font-semibold">Skills</NavLink>
        </nav>

        {/* Content */}
        <main className="max-w-3xl mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/github" element={<Github />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

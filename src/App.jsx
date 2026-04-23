import React from "react";
import Aboutme from "./components/Aboutme"; // Komponentni chaqiramiz

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* Navbar va Hero qismlarini keyinroq qo'shamiz */}
      <main>
        <Aboutme />
      </main>
    </div>
  );
}

export default App;

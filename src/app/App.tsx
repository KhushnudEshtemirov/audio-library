import { Routes, Route } from "react-router-dom";

import { AudioBooks, Home } from "@/pages";
import { Footer, Header } from "@/widgets";

export function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<AudioBooks />} />
      </Routes>
      <Footer />
    </div>
  );
}

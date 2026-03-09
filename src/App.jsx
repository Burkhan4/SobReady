import { useState } from "react";
import Navbar from "./Navbar";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
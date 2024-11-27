import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ProductPage from "./ProductPage";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductPage />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </Suspense>
  );
}

export default App;

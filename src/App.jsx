import { Fragment, useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./page/Home";
import Product from "./page/Product";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </Fragment>
  );
}

export default App;

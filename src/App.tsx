import { Route, Routes } from "@solidjs/router";
import { Component, createSignal } from "solid-js";
import Home from "./routes/Home";

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={Home} />
    </Routes>
  );
};

export default App;

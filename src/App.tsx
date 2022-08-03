import { Route, Routes } from "@solidjs/router";
import { Component } from "solid-js";

import Home from "./routes/Home";
import Document from "./routes/Document";

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/:id" component={Document} />
    </Routes>
  );
};

export default App;

import { children, Component, JSX } from "solid-js";

import Header from "../components/Header";

type TProps = {
  children: JSX.Element;
};

const Layout: Component<TProps> = (props) => {
  const c = children(() => props.children);
  return (
    <div class="h-screen flex flex-col">
      <Header />
      <main class="grow">{c()}</main>
      <footer class="p-4 bg-purple-200">footer</footer>
    </div>
  );
};

export default Layout;

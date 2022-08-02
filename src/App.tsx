import { Component, createSignal } from "solid-js";
import MarkdownIt from "markdown-it";

import Header from "./components/Header";

const md = new MarkdownIt();

const App: Component = () => {
  const [markdown, setMarkdown] = createSignal("");

  const handleKeyup = (event: Event) => {
    const { value } = event.currentTarget as HTMLTextAreaElement;
    setMarkdown(value);
  };

  return (
    <div>
      <Header />
      <main class="p-4 grid grid-cols-2 gap-4">
        <textarea
          class="p-4 rounded"
          name="markdown"
          id="markdown"
          cols="30"
          rows="10"
          onKeyUp={handleKeyup}
        ></textarea>
        <section innerHTML={md.render(markdown())} class="p-4 rounded" />
      </main>
    </div>
  );
};

export default App;

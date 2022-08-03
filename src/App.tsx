import { Component, createSignal } from "solid-js";
import MarkdownIt from "markdown-it";

import Header from "./components/Header";

const md = new MarkdownIt();

const SOME_MARKDOWN = `
# Nice Document

hey this is some markdown!
`;

const App: Component = () => {
  const [markdown, setMarkdown] = createSignal(SOME_MARKDOWN);

  const handleKeyup = (event: Event) => {
    const { value } = event.currentTarget as HTMLTextAreaElement;
    setMarkdown(value);
  };

  return (
    <div class="h-screen flex flex-col">
      <Header />
      <main class="grow p-4 grid grid-cols-2 gap-4">
        <section class="h-full">
          <textarea
            class="w-full h-full p-4 rounded"
            name="editor"
            id="editor"
            onKeyUp={handleKeyup}
          ></textarea>
        </section>
        <section innerHTML={md.render(markdown())} class="p-4 rounded prose" />
      </main>
      <footer class="p-4 bg-purple-200">footer</footer>
    </div>
  );
};

export default App;

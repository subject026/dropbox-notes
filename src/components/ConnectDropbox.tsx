import { Component, createResource, Show } from "solid-js";
import { getAuthenticationUrl } from "../services/dropbox";

const ConnectDropbox: Component = () => {
  const [url] = createResource(getAuthenticationUrl);

  return (
    <div>
      <Show when={url()}>
        <a href={url()}>Connect to Dropbox</a>
      </Show>
    </div>
  );
};

export default ConnectDropbox;

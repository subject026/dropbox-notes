import { Component, createResource } from "solid-js";
import { getAuthenticationUrl } from "../services/dropbox";

const ConnectDropbox: Component = () => {
  const [data] = createResource("", getAuthenticationUrl);

  return <div>{data() && <a href={data()}>Connect to Dropbox</a>}</div>;
};

export default ConnectDropbox;

import { Component } from "solid-js";

import Layout from "../components/Layout";
import DocumentIndex from "../components/DocumentIndex";
import ConnectDropbox from "../components/ConnectDropbox";
import { parseQueryString } from "../utils";

const Home: Component = () => {
  console.log("document.cookie: ", document.cookie);

  // TODO need to check cookie called "accessToken" is present

  // TODO: only check for hash if no cookie is present
  if (window.location.hash)
    document.cookie = `accessToken=${parseQueryString(window.location.hash)}`;

  return (
    <Layout>{document.cookie ? <DocumentIndex /> : <ConnectDropbox />}</Layout>
  );
};

export default Home;

import { Component, createEffect, createResource, For, Show } from "solid-js";

import { Link } from "@solidjs/router";
import Layout from "../components/Layout";
import { fetchDocs } from "../services/dropbox";
import DocumentIndex from "../components/DocumentIndex";
import ConnectDropbox from "../components/ConnectDropbox";

const Home: Component = () => {
  // if (!document.cookie) {
  //   console.log("setting a cookie...");
  //   document.cookie = "accessToken=woofwoof";
  // }

  console.log(document.cookie);

  return (
    <Layout>{document.cookie ? <DocumentIndex /> : <ConnectDropbox />}</Layout>
  );
};

export default Home;

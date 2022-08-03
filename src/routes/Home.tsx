import { Component } from "solid-js";

import { Link } from "@solidjs/router";
import Layout from "../components/Layout";

const Home: Component = () => {
  // check DB connection

  // -> if not connected show link to connect

  // -> if connected fetch filelist and render links
  return (
    <Layout>
      <Link href={`/some_id_12345`}>Document 1</Link>
    </Layout>
  );
};

export default Home;

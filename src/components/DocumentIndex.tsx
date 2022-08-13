import { Component, createEffect, createResource, For, Show } from "solid-js";

import { Link } from "@solidjs/router";
import Layout from "../components/Layout";
import { fetchDocs } from "../services/dropbox";

const DocumentIndex: Component = () => {
  // check DB connection

  // -> if not connected show link to connect

  // -> if connected fetch filelist and render links

  const [data] = createResource("", fetchDocs);

  return (
    <>
      {data.loading && <p>loading</p>}
      {data() && (
        <For each={data()}>
          {(doc) => {
            return <Link href={`/some_id_12345`}>{doc}</Link>;
          }}
        </For>
      )}
    </>
  );
};

export default DocumentIndex;

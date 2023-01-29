import * as React from "react";
import Layout from "../components/layout";
import { background } from "./index.module.css";
import Seo from "../components/seo";
import "@fontsource/varela-round";

const IndexPage = (data) => {
  const siteTitle = "Saman Attar";
  return (
    <Layout className={background} title={siteTitle}>
      <Seo title="Howdy" />

      <p>
        Howdy! I'm{" "}
        <a target="_blank" href="https://twitter.com/SOQL101" rel="noreferrer">
          Saman
        </a>{" "}
        (he/him). I cook, bake bread, and build software.{" "}
      </p>

      <p>
        I specialize in{" "}
        <a
          target="_blank"
          href="https://trailblazer.me/id/saman"
          rel="noreferrer"
        >
          Salesforce.
        </a>{" "}
        Checkout my recent project,{" "}
        <a target="_blank" href="https://www.campapex.org">
          CampApex.org
        </a>
        .
      </p>

      <p>
        I'm a Sofware Engineer at Okta. I've also been a Tech Lead at USAA and
        President of UT Dallas's ACM chapter. Whoosh!
      </p>

      <p>
        For dinner, I prefer to stay in and{" "}
        <a
          target="_blank"
          href="https://vsco.co/saman-attar/gallery"
          rel="noreferrer"
        >
          cook
        </a>
        . I've been trying to read more. These <a href="/books">books</a> have
        made personal and professional impacts on me.
      </p>
    </Layout>
  );
};

export default IndexPage;

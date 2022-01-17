import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import { background } from './field-notes-template.module.css'
import Seo from "../components/seo"

import "@fontsource/varela-round"; 
import FieldNoteLayout from "../components/fieldNoteLayout"

const FieldNotesTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title

  return (
    <FieldNoteLayout location={location} class={background} title={siteTitle} >
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="field-note"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <footer>
        </footer>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody" 
        />
        <hr />
        <footer>
        </footer>
      </article>
    </FieldNoteLayout>
  )
}

export default FieldNotesTemplate

export const pageQuery = graphql`
  query FieldNoteBySlug(
    $id: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
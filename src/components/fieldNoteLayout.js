import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  blogContainer, heading
} from './fieldNoteLayout.module.css'


const FieldNoteLayout = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={blogContainer}>
      <title>{pageTitle}</title> 
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default FieldNoteLayout
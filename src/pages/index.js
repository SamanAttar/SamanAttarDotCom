import * as React from 'react'
import Layout from '../components/layout'
import { background } from './index.module.css'

const IndexPage = () => {
  return (
      <Layout className={background}>
            
        <p>Hey! I'm Saman (he/him). I'm a Sofware Engineer at Okta. </p>

        <p>What do I build? Lately, I've been crushing it with <a target="_blank" href="https://trailblazer.me/id/saman">Salesforce</a>. I've also built apps with Flask, .Net, and AWS. Some of those are on <a target="_blank" href="https://github.com/SamanAttar">Github</a>.</p>

        <p>I've been a Tech Lead at USAA and the president of UT Dallas's <a target="_blank" href="https://www.acmutd.co/">ACM</a> chapter. Whoosh!</p>
      
        <p>For dinner, I prefer to <a target="_blank" href="https://vsco.co/saman-attar/gallery">cook</a>. I've been trying to read more. Here are a few <a href="/books">books</a> that have impacted me.</p> 
      
        <p>If you'd like to connect, send a request on <a target="_blank" href="https://www.linkedin.com/in/saman-attar/">LinkedIn</a> or <a target="_blank" href="https://twitter.com/saman__c">Twitter</a>.</p>
    
      </Layout>
  )
}

export default IndexPage
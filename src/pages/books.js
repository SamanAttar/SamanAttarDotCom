import * as React from 'react'
import Layout from '../components/layout'
import { background } from './books.module.css'

const IndexPage = () => {
  return (
      <Layout className={background}>
        <h1>Engineering</h1>
        <ul>
            <li><a target="_blank" href="https://www.okta.com/">Clean Code</a> - Uncle Bob </li>
            <li><a target="_blank" href="https://www.okta.com/">Clean Architecture</a> - Uncle Bob </li>
            <li><a target="_blank" href="https://www.okta.com/">Ask Your Developer</a> - Jeff Lawson </li>
        </ul>

        <h1>Psychology & Sociology</h1>
        <ul>
            <li><a target="_blank" href="https://www.okta.com/">Thinking, Fast and Slow</a> - Daniel Kahneman</li>
            <li><a target="_blank" href="https://www.okta.com/">The Tipping Point</a> - Malcom Gladwell </li>
            <li><a target="_blank" href="https://www.okta.com/">Think Again</a> - Adam Grant </li>
        </ul>

        <h1>Cooking</h1>
        <ul>
            <li><a target="_blank" href="https://www.okta.com/">Salt Fat Acid Heat</a> - Samin Nosrat</li>
            <li><a target="_blank" href="https://www.okta.com/">Flour Water Salt Yeast</a> - Ken Forkish </li>
            <li><a target="_blank" href="https://www.okta.com/">Food of Life: Ancient Persian and Modern Iranian Cooking</a> - Najmieh Batmanglij </li>
        </ul>
        
      </Layout>
  )
}

export default IndexPage
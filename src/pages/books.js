import * as React from 'react'
import Layout from '../components/layout'
import { background } from './books.module.css'
import Seo from "../components/seo"


const IndexPage = () => {
  return (
      <Layout className={background}>
        <Seo title="Books" />
        <h1>Engineering</h1>
        <ul>
            <li><a target="_blank" href="https://www.goodreads.com/book/show/3735293-clean-code">Clean Code</a> - Uncle Bob </li>
            <li><a target="_blank" href="https://www.goodreads.com/book/show/18043011-clean-architecture">Clean Architecture</a> - Uncle Bob </li>
            <li><a target="_blank" href="https://www.goodreads.com/book/show/48716700-ask-your-developer">Ask Your Developer</a> - Jeff Lawson </li>
        </ul>

        <h1>Psychology & Sociology</h1>
        <ul>
            <li><a target="_blank" href="https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow">Thinking, Fast and Slow</a> - Daniel Kahneman</li>
            <li><a target="_blank" href="https://www.goodreads.com/book/show/2612.The_Tipping_Point">The Tipping Point</a> - Malcom Gladwell </li>
            <li><a target="_blank" href="https://www.goodreads.com/book/show/55539565-think-again">Think Again</a> - Adam Grant </li>
        </ul>

        <h1>Cooking</h1>
        <ul>
            <li><a target="_blank" href="https://www.goodreads.com/book/show/30753841-salt-fat-acid-heat">Salt Fat Acid Heat</a> - Samin Nosrat</li>
            <li><a target="_blank" href="https://www.goodreads.com/book/show/13414492-flour-water-salt-yeast">Flour Water Salt Yeast</a> - Ken Forkish </li>
            <li><a target="_blank" href="https://www.goodreads.com/book/show/110103.New_Food_of_Life">Food of Life: Ancient Persian and Modern Iranian Cooking</a> - Najmieh Batmanglij </li>
        </ul>
        
      </Layout>
  )
}

export default IndexPage
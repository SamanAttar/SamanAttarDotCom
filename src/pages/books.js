import * as React from 'react'
import Layout from '../components/layout'
import { background } from './books.module.css'
import Seo from "../components/seo"


const IndexPage = () => {
  return (
      <Layout className={background}>
        <Seo title="Books" />
        <h1>Tech</h1>
        <ul>
            <li><a target="_blank" href="https://www.goodreads.com/book/show/48716700-ask-your-developer">Ask Your Developer</a> - Lawson </li>
            <li><a target="_blank" href="https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer">The Pragmatic Programmere</a> - Hunt & Thomas </li>
            <li><a target="_blank" href="https://www.goodreads.com/book/show/3735293-clean-code">Clean Code</a> - Martin </li>

        </ul>

        <h1>Psychology & Sociology</h1>
        <ul>
            <li><a target="_blank" href="https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow">Thinking, Fast and Slow</a> - Kahneman</li>
            <li><a target="_blank" href="https://www.goodreads.com/book/show/2612.The_Tipping_Point">The Tipping Point</a> - Gladwell </li>
            <li><a target="_blank" href="https://www.goodreads.com/book/show/629.Zen_and_the_Art_of_Motorcycle_Maintenance">Zen and the Art of Motorcycle Maintenance</a> - Pirsig</li>
        </ul>

        <h1>Cooking</h1>
        <ul>
            <li><a target="_blank" href="https://www.goodreads.com/book/show/30753841-salt-fat-acid-heat">Salt Fat Acid Heat</a> - Nosrat</li>
            <li><a target="_blank" href="https://www.goodreads.com/book/show/13414492-flour-water-salt-yeast">Flour Water Salt Yeast</a> - Forkish </li>
            <li><a target="_blank" href="https://www.goodreads.com/book/show/110103.New_Food_of_Life">Food of Life: Ancient Persian and Modern Iranian Cooking</a> - Batmanglij </li>
        </ul>
        
      </Layout>
  )
}

export default IndexPage

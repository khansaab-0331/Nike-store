import React from 'react'
import Hero from './components/Hero'
import { heroapi,toprateslaes,popularsales ,highlight,sneaker} from './data/data'
import Sales from './components/Sales'
import FlexContent from './components/FlexContent'
import Check from './components/Check'
const App = () => {
  return (
    <main className='relative gap-16 flex flex-col'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists/>
        <FlexContent endpoint={highlight}/>
        <Sales endpoint={toprateslaes}/>
        <FlexContent endpoint={sneaker}/>
        <Check />
        

    </main>
  )
}

export default App
import Section from 'components/Section'
import React from 'react'
import songs from 'data/songs'

function Home() {



  return (
    <div className='grid gap-y-8'>
      <Section title="" more="/test" items={songs}/>
      <Section title="" more="/test" items={songs}/>
      <Section title="" more="/test" items={songs}/>
    </div>
  )
}

export default Home
import React from 'react'
import Player from './BottomBar/Player'

function Bottombar() {
  return (
    <div className='h-36 md:h-24 w-full bg-footer border-t border-white border-opacity-5 fixed bottom-0'>
      <Player/>
    </div>
  )
}

export default Bottombar
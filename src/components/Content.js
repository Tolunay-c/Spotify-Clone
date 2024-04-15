import React from 'react'
import Navbar from './Navbar'
import {Switch , Route} from "react-router-dom"
import Home from 'views/Home'
import Search from 'views/Search'
import Collection from 'views/Collection'

function Content() {
  return (
    <main className='w-full block md:flex-auto md:overflow-auto my-3 '>
      <Navbar/>
      <div className='p-2 md:px-8 md:py-5'>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/search">
            <Search/>
          </Route>
          <Route path="/collection">
            <Collection/>
          </Route>
        </Switch>
      </div>

    </main>
  )
}

export default Content
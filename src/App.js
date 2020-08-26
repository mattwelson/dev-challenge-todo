import React from "react"
import WebFontLoader from "webfontloader"

import TabBar from "./components/TabBar"
import TabRoutes from "./components/TabRoutes"
import "./App.css"

WebFontLoader.load({
  google: {
    families: ["Montserrat:500", "Raleway:700"],
  },
})

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>#todo</h1>
      </header>
      <div className='content'>
        <TabBar />
        <TabRoutes />
      </div>
      <footer>
        <h5>@mattwelson</h5>
      </footer>
    </div>
  )
}

export default App

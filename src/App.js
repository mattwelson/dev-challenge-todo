import React from "react"
import { useQuery, gql } from "@apollo/client"
import WebFontLoader from "webfontloader"

import logo from "./logo.svg"
import "./App.css"

WebFontLoader.load({
  google: {
    families: ["Montserrat:500", "Raleway:700"],
  },
})

const GET_TODOS = gql`
  query GET_TODOS {
    todo {
      id
      text
      state
    }
  }
`

function App() {
  const { loading, error, data } = useQuery(GET_TODOS)
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <div>
        {data &&
          data.todo.map(({ id, text, state }) => <div key={id}>{text}</div>)}
      </div>
    </div>
  )
}

export default App

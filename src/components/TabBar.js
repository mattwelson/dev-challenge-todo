import React from "react"
import { Link } from "@reach/router"
import styled from "styled-components"

const TabBarStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  margin-top: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #bdbdbd;

  .tab {
    padding: 1rem 2rem 0;
    display: grid;
    justify-items: center;
    grid-gap: 1rem;
  }

  a {
    color: #333;
    text-decoration: none;
    position: relative;

    &[aria-current="page"] + .border {
      width: 90px;
      height: 4px;
      background: #2f80ed;
      border-radius: 4px 4px 0 0;
    }
  }
`

const TabBar = () => (
  <TabBarStyles>
    <div className='tab'>
      <Link to='/'>All</Link>
      <div className='border'></div>
    </div>
    <div className='tab'>
      <Link to='/active'>Active</Link>
      <div className='border'></div>
    </div>
    <div className='tab'>
      <Link to='/completed'>Completed</Link>
      <div className='border'></div>
    </div>
  </TabBarStyles>
)

export default TabBar

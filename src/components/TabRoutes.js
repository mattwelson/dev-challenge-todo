import React from "react"
import { Router } from "@reach/router"
import Tab from "./Todo/Tab"

import {
  GET_ALL_TODOS,
  GET_ACTIVE_TODOS,
  GET_COMPLETED_TODOS,
} from "./Todo/queries"

const TabRoutes = () => (
  <Router>
    <Tab path='/' query={GET_ALL_TODOS}></Tab>
    <Tab path='/active' query={GET_ACTIVE_TODOS}></Tab>
    <Tab
      path='/completed'
      query={GET_COMPLETED_TODOS}
      showSearchBar={false}
      canDelete
    ></Tab>
  </Router>
)

export default TabRoutes

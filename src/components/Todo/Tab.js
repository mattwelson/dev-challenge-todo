import React from "react"
import { getQuery, useQuery } from "@apollo/client"

import { GET_ALL_TODOS } from "./queries"

const Tab = ({
  canDelete = false,
  showSearchBar = true,
  query = GET_ALL_TODOS,
}) => {
  const { loading, error, data } = useQuery(query)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!</div>

  return (
    <div>
      {data && data.todo.map((todo) => <div key={todo.id}>{todo.text}</div>)}
    </div>
  )
}
export default Tab

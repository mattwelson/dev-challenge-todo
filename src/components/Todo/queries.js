import { gql } from "@apollo/client"

export const todoFragment = gql`
  fragment TodoDetails on todo {
    text
    state
    id
  }
`

export const GET_ALL_TODOS = gql`
  query GET_ALL_TODOS {
    todo {
      ...TodoDetails
    }
  }
  ${todoFragment}
`

export const GET_ACTIVE_TODOS = gql`
  query GET_ACTIVE_TODOS {
    todo(where: { state: { _eq: open } }) {
      ...TodoDetails
    }
  }
  ${todoFragment}
`

export const GET_COMPLETED_TODOS = gql`
  query GET_COMPLETED_TODOS {
    todo(where: { state: { _eq: closed } }) {
      ...TodoDetails
    }
  }
  ${todoFragment}
`

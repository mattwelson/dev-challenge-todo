import React from "react"
import { render } from "@testing-library/react"
import { MockedProvider } from "@apollo/client/testing"
import App from "./App"

test("renders learn react link", () => {
  const { getByText } = render(
    <MockedProvider>
      <App />
    </MockedProvider>
  )
  const linkElement = getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})

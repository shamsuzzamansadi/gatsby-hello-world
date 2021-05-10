import React from "react"
import Link from "gatsby-link"
import Todo from "./to-do"
export default () => {
  return <div style={{color: 'teal', backgroundColor: 'whitesmoke'}}>
      <h1>To-Do List</h1>
      <Todo />
      <Link to="/">Go To Home </Link>
  </div>
}

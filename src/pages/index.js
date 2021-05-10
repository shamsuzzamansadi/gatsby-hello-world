import React from "react"
import Link from "gatsby-link"

export default function Home() {
  return <div style={{color: 'teal', backgroundColor: 'whitesmoke'}}>
      <h1>Hello Sadi!</h1>
      <p1> I do not need one!</p1>
      <br />
      <Link to="/page-2/">Page 2 </Link>
      <Link to="/dir/page-3/">Page 3 </Link>
      <br />
      <Link to="/counters/">Counter </Link>
  </div>
}

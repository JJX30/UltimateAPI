import React from "react"
import { Link } from "gatsby"
import { GiBoxingGlove } from "react-icons/gi"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <img src={GiBoxingGlove} alt="UltimateAPI" />
        </Link>
        <input type="text" placeholder="search..." />
        <li>
          <Link to="/about"></Link>
        </li>
        <li>
          <Link to="/doc"></Link>
        </li>
        <li>
          <Link to="/sign in"></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

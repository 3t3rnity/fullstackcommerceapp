import React from 'react'
import { Link } from 'react-router-dom'

const sideItem = props => {
  return (
    <li>
        <Link
            to = { props.url }
        >
            { props.children }
        </Link>
    </li>
  )
}

export default sideItem

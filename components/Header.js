import React, { Component } from 'react'
// import { Input, Menu, Segment } from 'semantic-ui-react'
import { Link } from "../routes"
export default class Header extends Component {
  render() {


    return (
      <div className="header">
         <Link route="/">
          <a className="item">Supply Chian</a>
        </Link>

        <Link route="/supply-chain/new">
          <a className="item">Create Supply Chian</a>
        </Link>
     </div>
    )
  }
}
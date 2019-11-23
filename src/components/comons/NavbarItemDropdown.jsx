import React, { Component } from 'react'

class NavbarItemDropdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
  }

  toggleActive() {
    this.setState({ active: !this.state.active })
  }

render(){
  const classNames = ['dropdown-menu']

  if (this.state.active) classNames.push('show')

    return(
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.toggleActive.bind(this)}>
          { this.props.text }
        </a>
        <div className={classNames.join(' ')} aria-labelledby="navbarDropdown">
          { this.props.children }
        </div>
      </li>
    )
  }
}
  
export default NavbarItemDropdown
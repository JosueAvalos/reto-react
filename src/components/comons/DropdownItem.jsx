import React from 'react'

function DropdownItem(props){
  return(
    <a className="dropdown-item" href={ props.to }>
      { props.text }
    </a>
  )
}

export default DropdownItem
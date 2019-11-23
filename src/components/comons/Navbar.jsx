import React from 'react'
import NavbarItemDropdown from './NavbarItemDropdown'
import DropdownItem from './DropdownItem'

function Navbar() {


  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        flecs.chat
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon">
        </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link" href="#">
            Que es flecs
          </a>
          <a class="nav-item nav-link" href="#">
            Proyecto
          </a>
          <a class="nav-item nav-link" href="#" tabindex="-1" aria-disabled="true">
            Iniciar Sesión
          </a>
          <NavbarItemDropdown
            text="Acciones"
          >
            <DropdownItem
            text="Acción 1"
            to="/one"
            />
            <DropdownItem
            text="Acción 2"
            to="/two"
            />
            <DropdownItem
            text="Acción 3"
            to="/three"
            />
          </NavbarItemDropdown>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
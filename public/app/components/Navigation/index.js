import React from 'react';
import config from 'config';
import logo from './logo.png';
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand,
  Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle,
  DropdownMenu, DropdownItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Prompt } from "react-router-dom";
import { actionToogleModalIsOpen } from './actions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
        <Navbar color="faded" dark fixed="top" expand="md">
          <Link className='navbar-brend' to='/'><img src={logo}/></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink onClick={ ()=>this.props.actionToogleModalIsOpen("contacts") }>Контакты</NavLink>
                  </NavItem>
                  <NavItem>
                    <Link className='nav-link' to='/terms'>Правила и условия</Link>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={ ()=>this.props.actionToogleModalIsOpen("login")}>Вход</NavLink>
                  </NavItem>
                  <Button color="secondary" onClick={ ()=>this.props.actionToogleModalIsOpen("register") } >Регистрация <span>&#8594;</span></Button>
              </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

export default connect( null, dispatch => {
  return bindActionCreators({actionToogleModalIsOpen },dispatch);
})(Navigation)

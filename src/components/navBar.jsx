import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import logo from '../logo.svg'
import Auth from '../utils/AuthService'

const auth= new Auth();
class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item>
          <img src={logo} alt="logo"/>
        </Menu.Item>

        <Menu.Item
          name='feed'
          active={activeItem === 'feed'}
          onClick={this.handleItemClick}
          href='/feed'
        >
          Feed
        </Menu.Item>

        <Menu.Item
          name='card'
          active={activeItem === 'card'}
          onClick={this.handleItemClick}
          href='/card'
        >
          Card
        </Menu.Item>
        <Menu.Item
          name='card'
          active={activeItem === 'card'}
          onClick={this.handleItemClick}
          href='/authed'
        >
          Authed
        </Menu.Item>
        <Menu.Menu position='right' >
          <Menu.Item>
                    {
                        (auth.isAuthenticated()) ? ( <a className="navbar-item is-danger" onClick={() => auth.logout()}>Log out </a> ) : ( <a className="navbar-item is-danger" onClick={() => auth.login()}>Log In</a> )
                    }
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default NavBar
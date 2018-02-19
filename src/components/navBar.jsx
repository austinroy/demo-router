import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import logo from '../logo.svg'

class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item>
          <img src={logo} />
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
      </Menu>
    )
  }
}

export default NavBar
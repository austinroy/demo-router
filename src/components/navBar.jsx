import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import logo from './logo.svg';

class Menu extends Component {
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
        >
          Feed
        </Menu.Item>

        <Menu.Item
          name='card'
          active={activeItem === 'card'}
          onClick={this.handleItemClick}
        >
          Card
        </Menu.Item>
      </Menu>
    )
  }
}

export default Menu
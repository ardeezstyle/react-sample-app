import * as React from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Navigation extends React.Component<any, any>  {

  state = {}

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  public render() {
    const activeItem = this.state
    return (
      <Menu>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          // onClick={this.handleItemClick}
          as={Link}
          to= {"/"}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='newEmployee'
          active={activeItem === 'newEmployee'}
          // onClick={this.handleItemClick}
          as={Link}
          to= {"/new-employee"}
        >
          New Employee
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navigation;
  
import * as React from 'react';
import { Menu } from 'semantic-ui-react'

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
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='newEmployee'
          active={activeItem === 'newEmployee'}
          // onClick={this.handleItemClick}
        >
          New Employee
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navigation;
  
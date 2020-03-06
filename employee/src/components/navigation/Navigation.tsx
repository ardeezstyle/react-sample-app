import * as React from 'react';
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class Navigation extends React.Component<any, any>  {

  state = {
    activeItem: ''
  }

  handleItemClick = (name: string) => {
    this.setState({ activeItem: name });
  }

  public render() {
    const {activeItem} = this.state;

    return (
      <Menu>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={() => this.handleItemClick('home')}
          as={NavLink}
          to= {"/employees"}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='newEmployee'
          active={activeItem === 'newEmployee'}
          onClick={() => this.handleItemClick('newEmployee')}
          as={NavLink}
          to= {"/new-employee"}
        >
          New Employee
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navigation;

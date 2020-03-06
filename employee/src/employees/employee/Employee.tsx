import * as React from 'react';
import { Tab } from 'semantic-ui-react'

const panes = [
  {
    menuItem: 'Employee Details',
    render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
  },
  {
    menuItem: 'Contact Details',
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  }
]
class Employee extends React.Component<any, any>  {
  public render() {
    return (
      <div style={{padding:'50px'}}>
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      </div>
    );
  }
}

export default Employee;
  
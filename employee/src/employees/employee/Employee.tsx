import * as React from 'react';
import { Tab, List } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Employee extends React.Component<any, any>  {
  constructor(props){
    super(props);
    const id = +props.match.params.id;
    if(id) {
      this.props.getEmployee(id);
    }
  }

  panes = [
    {
      menuItem: 'Employee Details',
      render: () => (<Tab.Pane attached={false}>
        <List>
          <List.Item>Emp ID: {this.props.employee.empID}</List.Item>
          <List.Item>Emp Name: {this.props.employee.empName}</List.Item>
          <List.Item>Designation: {this.props.employee.designation}</List.Item>
          <List.Item>Joining Date: {this.props.employee.joiningDate}</List.Item>
        </List>
      </Tab.Pane>)
    },
    {
      menuItem: 'Contact Details',
      render: () => <Tab.Pane attached={false}>
          <List>
          <List.Item>Email: {this.props.employee.email}</List.Item>
          <List.Item>City: {this.props.employee.city}</List.Item>
        </List>
      </Tab.Pane>
    }
  ]

  public render() {
    return (
      <div style={{padding:'50px'}}>
        <Tab menu={{ secondary: true, pointing: true }} panes={this.panes} />
      </div>
    );
  }
}

const mapStatesToProps = state => {
  return {
    employee: state.employee
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getEmployee: (id) => dispatch({type: 'EMPLOYEE_DETAIL', payload: id})
  };
}

export default connect(mapStatesToProps, mapDispatchToProps)(Employee);

import * as React from 'react';
import { Button, Form, Input, Select } from 'semantic-ui-react';
import { connect } from 'react-redux';

const cityOptions = [
  { text: 'Bangalore', value: 'Bangalore' },
  { text: 'Delhi', value: 'Delhi' },
  { text: 'Mumbai', value: 'Mumbai' },
  { text: 'Chennai', value: 'Chennai' },
  { text: 'Calcutta', value: 'calcutta' },
]
class NewEmployee extends React.Component<any, any>  {

  state = {
    empID : '',
    empName : '',
    designation: '',
    joiningDate : '',
    email: '',
    city: ''
  };

  handleInputChange = (e: any) => {
    this.setState({...this.state, [e.target.name]: e.target.value});
  };

  handleSelectionChange = (e: any) => {
    this.setState({...this.state, city: e.currentTarget.innerText});
  };

  onFormSubmit = () => {
    console.log(this.state);
    this.props.addNewEmployee(this.state);
  };

  public render() {
    return (
      <Form onSubmit={this.onFormSubmit} style={{padding:'50px'}}>
         <Form.Group widths='equal'>
          <Form.Field
            id='neEmpID'
            name='empID'
            control={Input}
            label='Employee ID'
            placeholder='Employee ID'
            value={this.state.empID}
            onChange={(event) => this.handleInputChange(event)}
          />
          <Form.Field
            id='neName'
            name='empName'
            control={Input}
            label='Employee Name'
            placeholder='Employee Name'
            value={this.state.empName}
            onChange={(event) => this.handleInputChange(event)}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field
            id='neDesignation'
            name='designation'
            control={Input}
            label='Employee Designation'
            placeholder='Employee Designation'
            value={this.state.designation}
            onChange={(event) => this.handleInputChange(event)}
          />
          <Form.Field
            id='nmJoiningDate'
            name='joiningDate'
            control={Input}
            label='Joining Date'
            placeholder='DD/MM/YYYY'
            value={this.state.joiningDate}
            onChange={(event) => this.handleInputChange(event)}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field
            id='nmEmailID'
            name='email'
            control={Input}
            label='Email'
            placeholder='joe@schmoe.com'
            value={this.state.email}
            onChange={(event) => this.handleInputChange(event)}
          />
          <Form.Field
            control={Select}
            name='city'
            options={cityOptions}
            label='City'
            placeholder='City'
            onChange={(event) => this.handleSelectionChange(event)}
          />
        </Form.Group>
        <Button primary type='submit'>Add New Employee</Button>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewEmployee: (obj) => dispatch({type: 'ADD_NEW_EMPLOYEE', payload: obj})
  };
}

export default connect(null, mapDispatchToProps)(NewEmployee);
  
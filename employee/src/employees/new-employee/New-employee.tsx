import * as React from 'react';
import { Button, Form, Input, Select } from 'semantic-ui-react'

const cityOptions = [
  { text: 'Bangalore', value: 'Bangalore' },
  { text: 'Delhi', value: 'Delhi' },
  { text: 'Mumbai', value: 'Mumbai' },
  { text: 'Chennai', value: 'Chennai' },
  { text: 'Calcutta', value: 'calcutta' },
]
class NewEmployee extends React.Component<any, any>  {
  public render() {
    return (
      <Form style={{padding:'50px'}}>
         <Form.Group widths='equal'>
          <Form.Field
            id='neEmpID'
            control={Input}
            label='Employee ID'
            placeholder='Employee ID'
          />
          <Form.Field
            id='neName'
            control={Input}
            label='Employee Name'
            placeholder='Employee Name'
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field
            id='neDesignation'
            control={Input}
            label='Employee Designation'
            placeholder='Employee Designation'
          />
          <Form.Field
            id='nmJoiningDate'
            control={Input}
            label='Joining Date'
            placeholder='DD/MM/YYYY'
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field
            id='nmEmailID'
            control={Input}
            label='Email'
            placeholder='joe@schmoe.com'
          />
          <Form.Field
            control={Select}
            options={cityOptions}
            label='City'
            placeholder='City'
          />
        </Form.Group>
        <Button primary type='submit'>Add New Employee</Button>
      </Form>
    );
  }
}

export default NewEmployee;
  
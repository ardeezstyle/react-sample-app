import * as React from 'react';
import {Table, Header} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Employees extends React.Component<any, any>  {

  renderLink = function(props) {
    let {text, link} = props;
    let jsx = <Link to={link}>{text}</Link>
    return jsx;
  }
  public render() {
    console.log(this.props.employees);
    return (
      <div style={{padding:'50px'}}>
        <Header as="h2"> Employees </Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Emp Id</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Designation</Table.HeaderCell>
              <Table.HeaderCell>Joining Date</Table.HeaderCell>
              <Table.HeaderCell>City</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.employees.map(el => {
              return (
                <Table.Row key={el.id}>
                  <Table.Cell>{el.empID}</Table.Cell>
                  <Table.Cell><Link to={'/employee/' + el.id}>{el.empName}</Link></Table.Cell>
                  <Table.Cell>{el.designation}</Table.Cell>
                  <Table.Cell>{el.joiningDate}</Table.Cell>
                  <Table.Cell>{el.city}</Table.Cell>
                  <Table.Cell>{el.email}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

const mapStatesToProps = state => {
  return {
    employees: state.employees
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // onClickRow: (id) => dispatch({type: 'EMPLOYEE_DETAIL', payload: id})
  };
}

export default connect(mapStatesToProps, mapDispatchToProps)(Employees);
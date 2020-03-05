import * as React from 'react';
import {Table, Header} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Employees extends React.Component<any, any>  {

  renderLink = function(props) {
    let {text, link} = props;
    let jsx = <Link to={link}>{text}</Link>
    return jsx;
  }

  public render() {
    return (
      <div>
        <Header as="h2"> Employees </Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Emp Id</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Designation</Table.HeaderCell>
              <Table.HeaderCell>Joining Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>101</Table.Cell>
              <Table.Cell>{this.renderLink({text : "Name One" , link : "/employee"})}</Table.Cell>
              <Table.Cell>Software Engineer</Table.Cell>
              <Table.Cell>16/5/2019</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>102</Table.Cell>
              <Table.Cell>{this.renderLink({text : "Name Two" , link : "/employee"})}</Table.Cell>
              <Table.Cell>Software Engineer 1</Table.Cell>
              <Table.Cell>16/5/2019</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>103</Table.Cell>
              <Table.Cell>{this.renderLink({text : "Name Three" , link : "/employee"})}</Table.Cell>
              <Table.Cell>Software Engineer 2</Table.Cell>
              <Table.Cell>16/5/2019</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default Employees;
  
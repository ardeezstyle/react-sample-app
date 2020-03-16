import * as React from 'react';
import CustomerService from '../../services/customer';

import Moment from 'react-moment';

class Customer extends React.Component<any, any>  {

  state: any = {
    customers: [],
    customer: {},
    selectedCustomer: null
  }
  private customerService = new CustomerService();

  componentDidMount() {
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.customerService.getCustomers()
      .then((response: any) => response.data)
      .then((customers: any) => this.setState({
        ...this.state,
        customers: customers
      }));
  }

  getCustomer(id: number) {
    this.customerService.getCustomer(id)
      .then((response: any) => this.setState({
        ...this.state,
        customer: response.data
      }));
  }

  selectedCustomer = (id: number) => {
    this.setState({
      ...this.state,
      selectedCustomer: id
    });
    this.getCustomer(id);
  }

  addCustomer = () => {
    const postData = {
      fname: 'Mathew',
      lname: 'Hayden',
      email: 'ardeezstyle@gmail.com',
      phone: '9741460765',
      dob: '02/03/1974'
    }

    this.customerService.addCustomer(postData)
      .then((response: any) => {
        if(response.status === 200) {
          this.getAllCustomers();
        }
      });
  }
  editCustomer = (id: number) => {
    const postData = {
      fname: 'Mathew',
      lname: 'Sinclair',
      email: 'ardeezstyle@gmail.com',
      phone: '9741460765',
      dob: '02/03/1998'
    }
    this.customerService.editCustomer(id, postData)
      .then((response: any) => {
        if(response.status === 200) {
          this.getAllCustomers();
        }
      });
  }
  deleteCustomer = (id: number) => {
    this.customerService.deleteCustomer(id)
      .then((response: any) => {
        if(response.status === 200) {
          this.getAllCustomers();
        }
      });
  }

  public render() {
    return (
      <div>
        <div className="action-panel">
          <button className="primary-button" onClick={this.addCustomer}>Add Customer</button>
        </div>

        <div className="columns">
          <div className="column main">
            <h2>List of Customers</h2>
            {this.state.customers.map((customer: any) =>
              <div key={customer.id} className="customer" onClick={() => this.selectedCustomer(customer.id)}>
                Name: {customer.fname} {customer.lname} <br />
                Email: {customer.email}<br />
                Phone: {customer.phone}<br />
                Date of Birth: <Moment format="DD/MM/YYYY">{customer.dob}</Moment>
                <div className="action-footer">
                  <button className="default-button" onClick={() => this.editCustomer(customer.id)}>Edit Customer</button>
                  <button className="default-button" onClick={() => this.deleteCustomer(customer.id)}>Delete Customer</button>
                </div>
              </div>
            )}
          </div>

          {this.state.selectedCustomer !== null ?
            <div className="column sidebar">
              <h2>Customer Details</h2>
              <div className="customer">
                Name: {this.state.customer.fname} {this.state.customer.lname} <br />
                Email: {this.state.customer.email}<br />
                Phone: {this.state.customer.phone}<br />
                Date of Birth: <Moment format="DD/MM/YYYY">{this.state.customer.dob}</Moment>
              </div>
            </div>
            : null
          }

        </div>
      </div>
    );
  }
}

export default Customer;

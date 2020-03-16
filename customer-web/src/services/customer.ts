import axios from 'axios';

class CustomerService {
  getCustomers() {
    return axios.get('/api/customers');
  }
  getCustomer(id: number) {
    return axios.get('/api/customers/' + id);
  }
  addCustomer(postData: any) {
    return axios.post('/api/customers/', postData);
  }
  editCustomer(id: number, data: any) {
    return axios.put('/api/customers/' + id, data);
  }
  deleteCustomer(id: number) {
    return axios.delete('/api/customers/' + id);
  }
}
export default CustomerService;

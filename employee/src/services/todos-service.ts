import axios from 'axios';

class TodosService {
  constructor() {}

  getAllTodos() {
    return axios.get('https://jsonplaceholder.typicode.com/todos');
  }

  getTodo(id) {
    return axios.get('https://jsonplaceholder.typicode.com/todos/' + id);
  }

  getUsers() {
    return axios.get('https://rating-system-675db.firebaseio.com/')
  }

}
export default TodosService;

const initialState = {
  employees: [
    {
      id: 1,
      empID : 1,
      empName : 'Raman',
      designation: 'ss1',
      joiningDate : '1/1/2000',
      email: 'raman@abc.com',
      city: 'Bangalore'
    },
    {
      id: 2,
      empID : 2,
      empName : 'Raman 1',
      designation: 'ss2',
      joiningDate : '2/1/2000',
      email: 'raman1@abc.com',
      city: 'Bangalore'
    },
    {
      id: 3,
      empID : 3,
      empName : 'Raman 2',
      designation: 'ss3',
      joiningDate : '3/1/2000',
      email: 'raman2@abc.com',
      city: 'Bangalore'
    }
  ],
  employee: {}
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_NEW_EMPLOYEE':
      const emp = {...action.payload, id:state.employees.length+1};
      const updatedEmpArr = [...state.employees, emp];
      return { ...state, employees: updatedEmpArr};
    case 'EMPLOYEE_DETAIL':
      const matchedEmp = state.employees.filter(emp => emp.id === action.payload)[0]
      return { ...state, employee: matchedEmp};
  }
  return state;
}

export default reducer;

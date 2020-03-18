

class RoleUtils {

  setRole(role) {
     localStorage.setItem('imsRole', role);
  }

  getRole() {
    return localStorage.getItem('imsRole');
  }
}

export default new RoleUtils();

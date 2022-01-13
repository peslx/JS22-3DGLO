export class UserService {
  getUsers() {
    return fetch("http://localhost:3000/users").then((r) => r.json());
  }
}

export class UserService {
  getUsers() {
    return fetch("http://localhost:6600/users").then((r) => r.json());
  }

  addUser(user) {
    return fetch("http://localhost:6600/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  }
}

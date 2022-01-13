export class UserService {
  _users = [
    {
      id: 0,
      name: "Mark",
      email: "otto@gmail.com",
      children: true,
      permissions: false,
    },
    {
      id: 1,
      name: "Jacoby",
      email: "thornton@gmail.com",
      children: true,
      permissions: false,
    },
  ];

  get users() {
    return this._users;
  }

  set users(users) {
    this._users = users;
  }

  logger() {
    console.log(this.users);
  }
}

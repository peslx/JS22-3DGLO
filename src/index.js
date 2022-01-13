import { render } from "./modules/render";
import { addUsers } from "./modules/addUsers";
import { UserService } from "./modules/user_service";

window.userService = new UserService();

userService.getUsers().then((data) => {
  console.log(data);
  render(data);
});

addUsers();

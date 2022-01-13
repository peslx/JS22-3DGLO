import { renderer } from "./modules/renderer";
import { UserService } from "./modules/user_service";
import { addUsers } from "./modules/addUsers";

window.userService = new UserService();

userService.getUsers().then((data) => {
  // console.log(data);
  renderer(data);
});

addUsers();

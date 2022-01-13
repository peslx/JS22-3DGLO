import { UserService } from "./modules/user_service";
import { renderer } from "./modules/renderer";
import { addUsers } from "./modules/addUsers";

window.userService = new UserService();

userService.getUsers().then((data) => {
  renderer(data);
});

addUsers();

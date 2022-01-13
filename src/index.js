import { renderer } from "./modules/renderer";
import { UserService } from "./modules/user_service";

window.userService = new UserService();

renderer(userService.users);

import type { Request, Response } from "express";
import userService, { UserService } from "../service/user-service.mjs";

class UserController {
  private readonly userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  getUser = (c: Request, w: Response): void => {
    const users: string[] | null = this.userService.getUsers(1, 10);

    if (users === null) {
      w.status(404).json({
        error: "Users not found",
        statusCode: 404,
      });
      return;
    }

    w.status(200).json({ data: users, statusCode: 200 });
    return;
  };
}

export default new UserController(userService);

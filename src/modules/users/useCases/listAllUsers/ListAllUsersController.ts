import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    if (typeof user_id !== "string") {
      throw new Error("User ID must be a string!");
    }

    try {
      const all = this.listAllUsersUseCase.execute({ user_id });

      return response.status(200).json(all);
    } catch {
      return response.status(400).json({ error: "Ops! Something went wrong" });
    }
  }
}

export { ListAllUsersController };

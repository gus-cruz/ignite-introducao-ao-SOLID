import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    if (typeof user_id !== "string") {
      throw new Error("User ID must be a string!");
    }

    try {
      const user = this.turnUserAdminUseCase.execute({ user_id });
      return response.json(user);
    } catch {
      return response.status(404).json({ error: "User not found" });
    }
  }
}

export { TurnUserAdminController };

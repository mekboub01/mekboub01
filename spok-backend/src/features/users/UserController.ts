import { type User } from "@prisma/client";
import { Controller, Get, Query, Route } from "tsoa";

import { db } from "../../db";

@Route("/users")
export class UserController extends Controller {
  @Get("")
  async listUsers(
    @Query() page: number = 1,
    @Query() limit: number = 10
  ): Promise<User[]> {
    return db.user.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });
  }
}

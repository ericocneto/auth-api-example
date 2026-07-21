import type { CreateNewUserUseCase } from "@/domain/use-cases/create-new-user";
import type { FastifyInstance } from "fastify";
import { createUserController } from "../controllers/create-user-controller";

export function usersRoutes(createNewUser:CreateNewUserUseCase) {
    return async function (app:FastifyInstance) {
        app.post("/users", createUserController(createNewUser))
    }
}
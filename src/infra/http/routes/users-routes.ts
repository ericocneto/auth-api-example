import type { CreateNewUserUseCase } from "@/domain/use-cases/create-new-user";
import type { FastifyInstance } from "fastify";
import { createUserController } from "../controllers/create-user-controller";
import { fetchUsersController } from "../controllers/fetch-users-controller";
import type { FetchUsersUseCase } from "@/domain/use-cases/fetch-users";

export function usersRoutes(createNewUser:CreateNewUserUseCase, fetchUsers:FetchUsersUseCase) {
    return async (app:FastifyInstance) => {
        app.post("/users", createUserController(createNewUser))
        app.get("/users", fetchUsersController(fetchUsers))
    
}}
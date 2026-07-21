import { CreateNewUserUseCase } from "@/domain/use-cases/create-new-user";
import { FakeUsersRepository } from "@/infra/database/repositories/fake-users-repository";
import { usersRoutes } from "@/infra/http/routes/users-routes";
import {app} from '@/infra/http/app'

const usersRepository = new FakeUsersRepository()
const createNewUser = new CreateNewUserUseCase(usersRepository)

app.register(usersRoutes(createNewUser))

export {app}
import { CreateNewUserUseCase } from "@/domain/use-cases/create-new-user";
import { FakeUsersRepository } from "@/infra/database/repositories/fake-users-repository";
import { usersRoutes } from "@/infra/http/routes/users-routes";
import {app} from '@/infra/http/app'
import { FetchUsersUseCase } from "@/domain/use-cases/fetch-users";

const usersRepository = new FakeUsersRepository()
const createNewUser = new CreateNewUserUseCase(usersRepository)
const fetchUSers = new FetchUsersUseCase(usersRepository)

app.register(usersRoutes(createNewUser, fetchUSers))

export {app}
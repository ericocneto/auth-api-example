import { User } from "../entities/user"
import type { UsersRepository } from '../repositories/users-repository'

interface CreateNewUserUseCaseRequest{
    username: string,
    password:string,
    email:string
}
interface CreateNewUserUseCaseResponse{
    user: User
}


export class CreateNewUserUseCase{
    constructor(private readonly usersRepository: UsersRepository) {}

    async execute(user:CreateNewUserUseCaseRequest): Promise<CreateNewUserUseCaseResponse> {
        const newUser = new User({
            username: user.username,
            password: user.password,
            email: user.email,
            createdAt: new Date()
        })

        await this.usersRepository.create(newUser)

        return { user: newUser }
    }
}

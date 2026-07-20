interface CreateNewUserUseCaseRequest{
    username: string,
    password:string,
    email:string,
    createdAt: Date
}
interface CreateNewUserUseCaseResponse{}


export class CreateNewUserUseCae{
    execute(user:CreateNewUserUseCaseRequest){}
}
import type { CreateNewUserUseCase } from '@/domain/use-cases/create-new-user'
import type { FastifyReply, FastifyRequest } from 'fastify'
import {z} from 'zod'

const createUserBodySchema = z.object({
    username: z.string().min(3),
    email: z.email(),
    password: z.string().min(6)
})

export function createUserController(createNewUser:CreateNewUserUseCase) {
    return async function(request:FastifyRequest, reply:FastifyReply){
        const {username, email, password} = createUserBodySchema.parse(request.body)
        const {user} = await createNewUser.execute({
            username, email, password
        })
        return reply.status(201).send({user:{
            id: user.id.toValue(),
            username: user.username,
            email: user.email,
            createdAt: user.createdAt?.toISOString()
        }})
    }
}
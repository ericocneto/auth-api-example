import type { FetchUsersUseCase } from "@/domain/use-cases/fetch-users";
import type { FastifyReply, FastifyRequest } from "fastify";

export function fetchUsersController(fetchUSers:FetchUsersUseCase){
    return async function(_request:FastifyRequest, reply:FastifyReply){
        const {users} = await fetchUSers.execute()
        return reply.status(200).send({
        users: users.map((user) => ({
        id: user.id.toValue(),
        username: user.username,
        email: user.email,
        createdAt: user.createdAt?.toISOString(),
        }))
    })
    }
}
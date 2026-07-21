import fastify, { type FastifyInstance } from 'fastify'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

import { CreateNewUserUseCase } from '@/domain/use-cases/create-new-user'
import { FakeUsersRepository } from '@/infra/database/repositories/fake-users-repository'
import { createUserController } from './create-user-controller'

describe('Create user controller', () => {
  let app: FastifyInstance
  let usersRepository: FakeUsersRepository

  beforeEach(() => {
    app = fastify()

    usersRepository = new FakeUsersRepository()
    const createNewUser = new CreateNewUserUseCase(usersRepository)

    app.post('/users', createUserController(createNewUser))
  })

  afterEach(async () => {
    await app.close()
  })

  it('creates a user and returns 201 without exposing the password', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/users',
      payload: {
        username: 'John Doe',
        email: 'john@example.com',
        password: '123456',
      },
    })

    const body = JSON.parse(response.body)

    expect(response.statusCode).toBe(201)
    expect(body).toEqual({
      user: expect.objectContaining({
        id: expect.any(String),
        username: 'John Doe',
        email: 'john@example.com',
        createdAt: expect.any(String),
      }),
    })

    expect(body.user.password).toBeUndefined()
    expect(usersRepository.users).toHaveLength(1)
    expect(usersRepository.users[0]?.email).toBe('john@example.com')
  })
})
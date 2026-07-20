import { afterEach, describe, expect, it, vi } from 'vitest'

import { FakeUsersRepository } from '../../infra/database/repositories/fake-users-repository'
import { CreateNewUserUseCase } from './create-new-user'

describe('CreateNewUserUseCase', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('creates a user with the supplied credentials and the current date', async () => {
    const now = new Date('2026-07-20T12:00:00.000Z')
    vi.useFakeTimers()
    vi.setSystemTime(now)

    const usersRepository = new FakeUsersRepository()
    const useCase = new CreateNewUserUseCase(usersRepository)

    const { user } = await useCase.execute({
      username: 'John Doe',
      email: 'email@example.com',
      password: '123456',
    })

    expect(user.username).toBe('John Doe')
    expect(user.email).toBe('email@example.com')
    expect(user.password).toBe('123456')
    expect(user.createdAt).toEqual(now)
    expect(usersRepository.users).toEqual([user])
  })
})

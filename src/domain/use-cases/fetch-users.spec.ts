import { describe, expect, it } from 'vitest'

import { User } from '@/domain/entities/user'
import { FakeUsersRepository } from '@/infra/database/repositories/fake-users-repository'
import { FetchUsersUseCase } from './fetch-users'

describe('FetchUsersUseCase', () => {
  it('returns all registered users', async () => {
    const usersRepository = new FakeUsersRepository()

    await usersRepository.create(
      new User({
        username: 'John Doe',
        email: 'john@example.com',
        password: 'hashed-password',
        createdAt: new Date(),
      }),
    )

    const fetchUsers = new FetchUsersUseCase(usersRepository)

    const { users } = await fetchUsers.execute()

    expect(users).toHaveLength(1)
    expect(users[0]?.email).toBe('john@example.com')
  })
})
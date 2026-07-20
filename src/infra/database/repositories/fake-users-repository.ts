import type { User } from '../../../domain/entities/user'
import type { UsersRepository } from '../../../domain/repositories/users-repository'

export class FakeUsersRepository implements UsersRepository {
  public users: User[] = []

  async create(user: User): Promise<void> {
    this.users.push(user)
  }
}

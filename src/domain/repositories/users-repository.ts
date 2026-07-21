import type { User } from '../entities/user'

export interface UsersRepository {
  create(user: User): Promise<void>
  findMany():Promise<User[]>
}

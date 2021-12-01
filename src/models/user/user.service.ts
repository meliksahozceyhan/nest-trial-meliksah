import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { getRepository, Like } from 'typeorm'
import { User } from './entity/user.entity'

@Injectable()
export class UserService extends TypeOrmCrudService<User> {
	private userRepo = getRepository(User)

	constructor(@InjectRepository(User) userRepository) {
		super(userRepository)
	}

	public async getUserByUserName(userName: string): Promise<User> {
		return this.userRepo.findOne({ where: { userName: userName } })
	}

	public async saveUser(user: User): Promise<User> {
		return await this.userRepo.save(user)
	}
}

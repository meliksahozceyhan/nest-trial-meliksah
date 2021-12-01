import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { User } from './entity/user.entity'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	///Get User By UserName
	@Get('/getUser')
	public async getUserByEmail(@Query('userName') userName: string): Promise<User> {
		return await this.userService.getUserByUserName(userName)
	}

	/// Post a single student
	@Post('/')
	public async createUser(@Body() user: User): Promise<User> {
		return await this.userService.saveUser(user)
	}
}

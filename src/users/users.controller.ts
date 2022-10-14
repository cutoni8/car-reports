import { Body, Controller, Post } from '@nestjs/common';
import { CreateUSerDto } from './dtos/create-user.dto';
@Controller('auth')
export class UsersController {
	@Post('/signup')
	createUser(@Body() body: CreateUSerDto) {
		console.log(body);

	}

}

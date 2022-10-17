import {
	UseInterceptors,
	NestInterceptor,
	ExecutionContext,
	CallHandler
} from '@nestjs/common';
import { Observable, observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToInstance } from 'class-transformer';

//any class
interface ClassConstructor {
	new(...args: any[]): {}
}

export function Serialize(dto: ClassConstructor) {
	return UseInterceptors(new SerializeInterceptor(dto))
}

export class SerializeInterceptor implements NestInterceptor {
	constructor(private dto: ClassConstructor) { }

	intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
		//run before a request is handled


		return next.handle().pipe(
			map((data: any) => {
				//Run before response is sent out
				//if error occour not coming here!
				return plainToInstance(this.dto, data, {
					excludeExtraneousValues: true
				})

			})
		)
	}

}
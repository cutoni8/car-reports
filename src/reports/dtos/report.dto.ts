import { Expose, Transform } from 'class-transformer'
import { User } from '../../users/user.entity'

export class ReportDto {
	@Expose()
	id: number

	@Expose()
	approved: boolean;

	@Expose()
	price: number

	@Expose()
	make: string;

	@Expose()
	model: string;

	@Expose()
	year: number;

	@Expose()
	mileage: number;

	@Expose()
	lng: number;

	@Expose()
	lat: number;
	
	@Transform(({ obj }) => obj.user.id)
	@Expose()
	userId: number
}
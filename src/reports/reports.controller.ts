import {
	Body,
	Controller,
	Post,
	UseGuards,
	Patch,
	Param
} from '@nestjs/common';
import { AdminGuard } from 'src/guards/admin.guard';
import { AuthGuard } from 'src/guards/auth.guard';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { User } from 'src/users/user.entity';
import { ApproveReportDtop } from './dtos/approve-report.dto';
import { CreateReportDto } from './dtos/create-report.dto';
import { ReportDto } from './dtos/report.dto';
import { ReportsService } from './reports.service';
@Controller('reports')
export class ReportsController {
	constructor(private reportsService: ReportsService) { }

	@Post()
	@UseGuards(AuthGuard)
	@Serialize(ReportDto)
	createReport(@Body() body: CreateReportDto, @CurrentUser() user: User) {
		return this.reportsService.create(body, user);
	}

	@Patch('/:id')
	@UseGuards(AdminGuard)
	approveReport(@Param('id') id: string, @Body() body: ApproveReportDtop) {
		return this.reportsService.changeApproval(parseInt(id), body.approved)
	}
}

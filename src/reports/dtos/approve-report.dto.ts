import { IsBoolean } from 'class-validator'

export class ApproveReportDtop {
	@IsBoolean()
	approved: boolean;
}
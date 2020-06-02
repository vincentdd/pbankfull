import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
import { Bill } from '@libs/db/models/bill.model';

@Crud({ model: Bill })
@Controller('bills')
@ApiTags('账单')
export class BillsController {
    constructor(@InjectModel(Bill) private readonly model) { }
}

import { prop, modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

@modelOptions({
    schemaOptions: { timestamps: true }
})
export class Bill {
    @ApiProperty({ description: '名称', example: 'lunch' })
    @prop()
    context: string

    @ApiProperty({ description: '价格', example: '5.00' })
    @prop()
    price: string

    @prop()
    privateKey: string
}
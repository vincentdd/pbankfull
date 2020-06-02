import { prop, modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

@modelOptions({
    schemaOptions: { timestamps: true }
})
export class Tag {
    @ApiProperty({ description: '标签名', example: '食' })
    @prop({ required: true })
    context: string

    @ApiProperty({ description: '用户ID', example: '' })
    @prop()
    userID: string

    @ApiProperty({ description: '删除标记', example: 1 })
    @prop({ required: true })
    status: boolean

    @prop()
    createDate?: Date

    @prop()
    updated?: Date
}
import { prop, modelOptions, Ref } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { Tag } from './tag.model'
import { User } from './user.model'

@modelOptions({
    schemaOptions: { timestamps: true }
})
export class Bill {
    @ApiProperty({ description: '名称', example: 'lunch' })
    @prop({ required: true })
    context: string

    @ApiProperty({ description: '价格', example: '5.00' })
    @prop({ required: true })
    price: number

    @ApiProperty({ description: '标签ID', example: '' })
    @prop({ ref: Tag })
    tagID?: Ref<Tag>

    @ApiProperty({ description: '用户ID', example: '' })
    @prop({ ref: User })
    userID: Ref<User>

    @ApiProperty({ description: '删除标记', example: 1 })
    @prop({ required: true })
    status: boolean

    @prop()
    createDate?: Date

    @prop()
    updated?: Date
}
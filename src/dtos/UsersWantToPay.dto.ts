import { IsNotEmpty, IsString, IsPositive, IsBoolean } from 'class-validator'
export class UsersWnatToPayDto {
    @IsNotEmpty()
    @IsString()
    phoneNumber: string

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    email: string

    payed: boolean

    // @IsNotEmpty()
    // @IsString()
    // subscriptionDuration: string

    // @IsNotEmpty()
    // @IsPositive()
    // subscriptionPrice: number
}
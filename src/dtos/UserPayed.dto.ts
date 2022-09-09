import { IsNotEmpty, IsString, IsPositive } from 'class-validator'
export class UsersPayedDto {

    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    phoneNumber: string

    @IsNotEmpty()
    subscriptionDuration: string

    @IsNotEmpty()
    subscriptionPrice: number
}
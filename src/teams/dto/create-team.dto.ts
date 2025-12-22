import { IsString, IsOptional, MinLength, MaxLength } from 'class-validator';

export class CreateTeamDTO {
    @IsString()
    @MinLength(3, {message: 'O nome do time deve ter no minimo 3 caracteres'})
    @MaxLength(50, {message: 'O nome do time deve ter no máximo 50 caracteres'})
    name: string;

    @IsOptional()
    @IsString()
    @MaxLength(200, {message: 'A descrição deve ter no máximo 200 carateres'})
    description?: string;
}
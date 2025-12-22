import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTeamDTO } from './dto/create-team.dto';
import { UpdateTeamDTO } from './dto/update-team.dto';
import { Team } from '@prisma/client';


@Injectable()
export class TeamsService {
    constructor(private readonly prisma: PrismaService) {}

    async create(CreateTeamDTO: CreateTeamDTO, userId: string): Promise <Team>{
        return this.prisma.team.create({
            data:{
                name: CreateTeamDTO. name,
                description: CreateTeamDTO.description,
                userId: userId,
            },
            include: {
                pokemons: true,
            },
        });
    }

    async findAll(): Promise <Team[]>{
        return this.prisma.team.findMany({
            include: {
                pokemons: true,
            },
        });
    }

    async findOne(id: string): Promise <Team>{
        const team = await this.prisma.team.findUnique({
            where: { id },
            include: {
                pokemons: true,
            },
        });
        
        if (!team) {
            throw new NotFoundException(`Time com ID ${id} não foi encontrado`);
        }

        return team;
    }

    async update(id: string): Promise <Team>{
        await this.findOne(id);

        return this.prisma.team.update({
            where: {id},
            data: UpdateTeamDTO,
            include: {
                pokemons: true,
            },
        });
    }

    async delete (id: string): Promise <Team>{
        await this.findOne(id);

        return this.prisma.team.delete({
            where: {id},
        });
    }
}

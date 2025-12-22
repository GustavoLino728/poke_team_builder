import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    const connectionString = process.env.DATABASE_URL;

    console.log('DATABASE_URL:', connectionString ? 'carregada' : 'NÃO CARREGADA');

    if (!connectionString) {
      throw new Error('DATABASE_URL não está definida no .env');
    }
    
    const pool = new Pool({ connectionString });
    const adapter = new PrismaPg(pool);
    
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
    console.log('Prisma conectado ao banco de dados');
  }

  async onModuleDestroy() {
    await this.$disconnect();
    console.log('Prisma desconectado do banco de dados');
  }
}
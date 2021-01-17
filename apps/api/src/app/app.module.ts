import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DogsModule } from './dogs/dogs.module';

const {
  DB_HOST: host,
  DB_PORT: port,
  DB_USERNAME: username,
  DB_PASSWORD: password,
  DB_DATABASE: database,
} = process.env;

@Module({
  imports: [
    DogsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: host,
      port: +(port as string),
      username: username,
      password: password,
      database: database,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

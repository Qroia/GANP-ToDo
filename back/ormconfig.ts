import { ConfigModule, ConfigService } from '@nestjs/config';
import dbConfig from './src/config/db.config';
import { DataSource } from 'typeorm';

ConfigModule.forRoot({
  isGlobal: true,
  load: [dbConfig],
});

// @ts-ignore
export default new DataSource(dbConfig());

import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import mainConfig from 'config/main.config'
import databaseConfig from 'config/database.config'
import { GifModule } from './common/v1/gif/gif.module'

@Module({
  imports: [
    GifModule,
    ConfigModule.forRoot({
      load: [mainConfig, databaseConfig],
      expandVariables: true
    })
  ]
})
export class AppModule {}

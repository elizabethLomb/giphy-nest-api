import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import mainConfig from 'config/main.config'
import { GifModule } from './gif/gif.module'

@Module({
  imports: [
    GifModule,
    ConfigModule.forRoot({
      load: [mainConfig],
      isGlobal: true
    })
  ]
})
export class AppModule {}

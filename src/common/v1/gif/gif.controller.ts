import { Controller, Get } from '@nestjs/common'
import { GifService } from './gif.service'
@Controller('v1/gifs')
export class GifController {
  constructor (private gifService: GifService) {}

  @Get('/random')
  async getRadomGif() {
    this.gifService.getRadomGif()
  }
}

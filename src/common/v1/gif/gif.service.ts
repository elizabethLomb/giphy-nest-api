import { Injectable } from '@nestjs/common'

@Injectable()
export class GifService {

  public async getRadomGif() {
    console.log('RETURNNING - getRadomGif')
    return {}
  }
}

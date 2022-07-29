import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(private configService: ConfigService) { }

  getHello(): string {
    this.logger.log(this.configService.get('APP_NAME'));
    return 'Hello World';
  }
}

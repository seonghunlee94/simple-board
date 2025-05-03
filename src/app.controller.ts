import { Controller, Get, HttpException, HttpStatus, Logger, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Ip } from './decorators/ip.decorator';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}
  
  // private readonly logger = new Logger(AppController.name);
  @Get()
  getHello(
    // @Ip() ip: string,
  ): string {
    // console.log(ip);
    // this.logger.log('log 테스트');
    // this.logger.warn('warn 테스트');
    // this.logger.debug('debug 테스트');
    // this.logger.error('error 테스트');
    // this.logger.verbose('verbose 테스트');

    console.log(this.configService.get('ENVIRONMENT'));
    return this.appService.getHello();
    // throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
  }

  @Get('name')
  getName(
    // @Param('name') name: string
    @Query('name') name: string
  ): string {
    return `${name} hello`;
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpamController } from './spam.controller';
import { SpamService } from './spam.service';

@Module({
  imports: [],
  controllers: [AppController, SpamController],
  providers: [AppService, SpamService],
})
export class AppModule {}

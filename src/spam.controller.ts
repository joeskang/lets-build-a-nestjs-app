import { Controller, Get, Post } from '@nestjs/common';
import { SpamService } from './spam.service';

@Controller("/spam")
export class SpamController {
  constructor(private readonly spamService: SpamService) {}

  @Get()
  getSpam(): string {
    return this.spamService.getSpam();
  }

  @Post()
  saveSpam(spam: string): string {
    this.spamService.storeSpam(spam);
    return "OK"
  }
}

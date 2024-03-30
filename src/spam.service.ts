
import { Injectable } from '@nestjs/common';

@Injectable()
export class SpamService {
  getSpam(): string {
    return "foo";
  }

  storeSpam(spam: string): void {
    return;
  }
}

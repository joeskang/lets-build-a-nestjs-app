import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getFoo(): string {
    return "foo";
  }
}

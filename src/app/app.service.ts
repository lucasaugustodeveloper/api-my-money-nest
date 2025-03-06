import { Injectable } from '@nestjs/common';

export type HelloWorld = {
  version: string;
  message: string;
};

@Injectable()
export class AppService {
  getHello(): HelloWorld {
    return { version: '0.1.0', message: 'Hello, World!' };
  }
}

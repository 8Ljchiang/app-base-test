import { ILogger } from '../services/log.service';

export class ConsoleLogger implements ILogger {
  log(text: string): void {
    console.log(text);
  }
}

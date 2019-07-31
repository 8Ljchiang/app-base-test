import { appConfig } from './../configs/app.config';
import { ConsoleLogger } from '../util/ConsoleLogger';

export enum LogType {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR'
}

export interface ILogger {
  log(text: string): void;
}

class LogService {
  private static _instance: LogService;
  private constructor(
    private _isEnabled: boolean,
    private _appName: string,
    private _env: string,
    private _logger: ILogger
  ) {}
  static getInstance(logger: ILogger) {
    if (!LogService._instance) {
      LogService._instance = new LogService(appConfig.enableLogging, appConfig.name, appConfig.env, logger);
    }
    return LogService._instance;
  }

  info(subject: string, description?: string, context?: string) {
    const updatedSubject = `${LogType.INFO}: ${subject}`;
		this.log(LogType.INFO, updatedSubject, description, context);
  }

  warn(subject: string, description?: string, context?: string) {
    this.log(LogType.WARN, subject, description, context);
  }

  error(error: Error, context?: string) {
    const subject = `${error.message}`;
		const description = ''; // `${error.stack}`;
		this.log(LogType.ERROR, subject, description, context);
  }

  private log(type: LogType, subject: string, description?: string, context?: string): void {
    if (this._isEnabled) {
      let metaInfo = type as string;
      if (this._appName) {
        metaInfo = this.append(metaInfo, this._appName);
      }
      if (this._env) {
        metaInfo = this.append(metaInfo, this._env);
      }
      if (context) {
        metaInfo = this.append(metaInfo, context);
      }
      let resultText = metaInfo;
      if (subject) {
        resultText = this.appendLine(resultText, subject);
      }
      if (description) {
        resultText = this.appendLine(resultText, description);
      }
      this._logger.log(resultText);
    }
  }

	private appendLine(currentText: string, nextText: string): string {
		return `${currentText}\n${nextText}`;
	}

	private append(currentText: string, nextText: string): string {
		return `${currentText} - ${nextText}`;
	}
}

const logServiceSingleton: LogService = LogService.getInstance(new ConsoleLogger());
Object.freeze(logServiceSingleton);

export default logServiceSingleton;

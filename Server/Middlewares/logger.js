import { createLogger, transports, format } from 'winston';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const logger = createLogger({
  level: 'error',
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.File({
      filename: path.join(__dirname, './Log/error.log'),
      level: 'error',
    }),
    new transports.File({ filename: path.join(__dirname, './Log/combined.log') }),
  ],
});

export default logger;

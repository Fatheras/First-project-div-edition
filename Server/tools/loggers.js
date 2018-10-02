const winston = require('winston');
const path = require('path');
var fileSize = 1024000;

const myFormat = winston.format.printf(info => {
    return `${info.timestamp} ${info.level}: ${info.message}`;
});

class LoggerService {
    constructor() {
        this.commonLogger = null;
    }
    static initLoggers(settings) {
        this.commonLogger = this.getCommonLogger(settings);
    }

    static initGlobalLoggers() {
        global.logger = this.commonLogger;
    }
    static getCommonLogger() {
        const fileLogger = new (winston.transports.File)({
            filename: path.join("logs", "common", "log.log"),
            handleExceptions: true,
            maxsize: fileSize,
            format: winston.format.combine(
                winston.format.timestamp(),
                myFormat
            )
        });
        const result = winston.createLogger({
            transports: [
                new (winston.transports.Console)({
                    format: winston.format.combine(
                        winston.format.colorize(),
                        winston.format.timestamp(),
                        myFormat
                    )
                }),
                fileLogger
            ],
            exceptionHandlers: [fileLogger]
        });
        return result;
    }
}
module.exports = LoggerService;
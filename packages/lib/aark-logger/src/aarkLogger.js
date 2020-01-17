import log from 'npmlog';
import chalk from 'chalk';

export const aarkLogger = ({ heading = 'Aark', origin = null }) => {
  log.heading = heading;
  const mapNpmLogToChalkMethod = {
    error: 'error',
    warn: 'warn',
    silly: 'grey',
    info: 'blue',
    http: 'green',
  };

  return (level, message, ...args) =>
    log[level](`[${origin}]`, chalk[mapNpmLogToChalkMethod[level]](message), ...args);
};

export { log as npmLog, chalk };

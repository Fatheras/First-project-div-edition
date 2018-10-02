const util = require('util');
const child_process = require('child_process');
const execP = util.promisify(child_process.exec);

module.exports = class MigrationService {
    static async runMigrations() {
        const { stdout, stderr } = await execP('npm run migrations');
        logger.info('runMigrations.stdout:');
        logger.info(stdout);
        logger.info('runMigrations.stderr:');
        logger.info(stderr);
        logger.info('Migrations succesfully finished');
        return true;
    }
}
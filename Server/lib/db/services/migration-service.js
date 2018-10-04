const util = require('util');
const child_process = require('child_process');
const execP = util.promisify(child_process.exec);

module.exports = class MigrationService {
    static async runMigrations(){
        const { stdout, stderr } = await execP('npm run migrations');
        console.log('runMigrations.stdout:');
        console.log(stdout);
        console.log('runMigrations.stderr:');
        console.log(stderr);
        console.log('Migrations sucsessfully finished');
        return true;
    }    
}
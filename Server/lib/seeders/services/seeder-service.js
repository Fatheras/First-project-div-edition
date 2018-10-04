const util = require('util');
const child_process = require('child_process');
const execP = util.promisify(child_process.exec);

module.exports = class SeederService {
    static async runSeeders() {
        const { stdout, stderr } = await execP('npm run seeders');
        console.log('runSeeders.stdout:');
        console.log(stdout);
        console.log('runSeeders.stderr:');
        console.log(stderr);
        console.log('Seeders succesfully finished');
        return true;
    }
}
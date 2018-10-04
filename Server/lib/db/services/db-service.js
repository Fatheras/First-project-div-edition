const db = require('../models/db');
const MigrationService = require('./migration-service');
const SeederService = require('./seeder-service')

module.exports = class DBService {
    static async initDataBase(){
        try {
            await db.authenticate();
            await db.sync();
            await MigrationService.runMigrations();
            await SeederService.runSeeders();
        }
        catch (err) {
            logger.error('DB init ERROR');
            logger.error(err);            
        }
    }
} 
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';
async function connectToDatabase() {
    try {
        await mongoose_1.default.connect(connectionString, { dbName: 'octofit_db' });
        console.log('Connected to octofit_db');
        const db = mongoose_1.default.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        return db;
    }
    catch (error) {
        console.error('Error connecting to octofit_db:', error);
        throw error;
    }
}
exports.default = connectToDatabase;

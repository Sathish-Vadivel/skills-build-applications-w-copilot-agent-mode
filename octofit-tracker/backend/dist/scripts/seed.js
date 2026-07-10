"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const models_1 = require("../models");
const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await mongoose_1.default.connect(connectionString, { dbName: 'octofit_db' });
        console.log('Connected to octofit_db');
        await Promise.all([
            models_1.UserModel.deleteMany({}),
            models_1.TeamModel.deleteMany({}),
            models_1.ActivityModel.deleteMany({}),
            models_1.LeaderboardEntryModel.deleteMany({}),
            models_1.WorkoutModel.deleteMany({}),
        ]);
        const users = await models_1.UserModel.insertMany([
            { name: 'Ava Chen', email: 'ava.chen@example.com', fitnessGoal: 'Build endurance' },
            { name: 'Noah Brooks', email: 'noah.brooks@example.com', fitnessGoal: 'Increase strength' },
            { name: 'Maya Patel', email: 'maya.patel@example.com', fitnessGoal: 'Improve mobility' },
        ]);
        const teams = await models_1.TeamModel.insertMany([
            { name: 'Momentum Squad', description: 'A fast-paced endurance team' },
            { name: 'Iron Core', description: 'Strength-focused athletes' },
        ]);
        const activities = await models_1.ActivityModel.insertMany([
            { title: 'Morning Run', type: 'Cardio', durationMinutes: 35 },
            { title: 'Strength Circuit', type: 'Strength', durationMinutes: 45 },
            { title: 'Yoga Flow', type: 'Mobility', durationMinutes: 30 },
        ]);
        const leaderboardEntries = await models_1.LeaderboardEntryModel.insertMany([
            { username: 'ava.chen', score: 980, rank: 1 },
            { username: 'noah.brooks', score: 945, rank: 2 },
            { username: 'maya.patel', score: 910, rank: 3 },
        ]);
        const workouts = await models_1.WorkoutModel.insertMany([
            { name: 'Hill Intervals', focus: 'Cardio', durationMinutes: 40 },
            { name: 'Upper Body Blast', focus: 'Strength', durationMinutes: 35 },
            { name: 'Recovery Stretch', focus: 'Mobility', durationMinutes: 20 },
        ]);
        console.log('Seeded users:', users.length);
        console.log('Seeded teams:', teams.length);
        console.log('Seeded activities:', activities.length);
        console.log('Seeded leaderboard entries:', leaderboardEntries.length);
        console.log('Seeded workouts:', workouts.length);
        console.log('Database seeding complete');
        await mongoose_1.default.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();

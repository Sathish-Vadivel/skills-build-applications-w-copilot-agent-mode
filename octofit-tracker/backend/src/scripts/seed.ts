import mongoose from 'mongoose';
import {
  ActivityModel,
  LeaderboardEntryModel,
  TeamModel,
  UserModel,
  WorkoutModel,
} from '../models';

const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString, { dbName: 'octofit_db' });
    console.log('Connected to octofit_db');

    await Promise.all([
      UserModel.deleteMany({}),
      TeamModel.deleteMany({}),
      ActivityModel.deleteMany({}),
      LeaderboardEntryModel.deleteMany({}),
      WorkoutModel.deleteMany({}),
    ]);

    const users = await UserModel.insertMany([
      { name: 'Ava Chen', email: 'ava.chen@example.com', fitnessGoal: 'Build endurance' },
      { name: 'Noah Brooks', email: 'noah.brooks@example.com', fitnessGoal: 'Increase strength' },
      { name: 'Maya Patel', email: 'maya.patel@example.com', fitnessGoal: 'Improve mobility' },
    ]);

    const teams = await TeamModel.insertMany([
      { name: 'Momentum Squad', description: 'A fast-paced endurance team' },
      { name: 'Iron Core', description: 'Strength-focused athletes' },
    ]);

    const activities = await ActivityModel.insertMany([
      { title: 'Morning Run', type: 'Cardio', durationMinutes: 35 },
      { title: 'Strength Circuit', type: 'Strength', durationMinutes: 45 },
      { title: 'Yoga Flow', type: 'Mobility', durationMinutes: 30 },
    ]);

    const leaderboardEntries = await LeaderboardEntryModel.insertMany([
      { username: 'ava.chen', score: 980, rank: 1 },
      { username: 'noah.brooks', score: 945, rank: 2 },
      { username: 'maya.patel', score: 910, rank: 3 },
    ]);

    const workouts = await WorkoutModel.insertMany([
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

    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();

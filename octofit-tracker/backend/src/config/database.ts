import mongoose from 'mongoose';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

async function connectToDatabase(): Promise<typeof mongoose.connection> {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    return db;
  } catch (error) {
    console.error('Error connecting to octofit_db:', error);
    throw error;
  }
}

export default connectToDatabase;

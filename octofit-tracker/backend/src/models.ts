import mongoose, { Schema, type Model } from 'mongoose';

export interface UserDocument {
  name: string;
  email: string;
  fitnessGoal?: string;
}

export interface TeamDocument {
  name: string;
  description?: string;
}

export interface ActivityDocument {
  title: string;
  type: string;
  durationMinutes?: number;
}

export interface LeaderboardEntryDocument {
  username: string;
  score: number;
  rank?: number;
}

export interface WorkoutDocument {
  name: string;
  focus: string;
  durationMinutes?: number;
}

const userSchema = new Schema<UserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  fitnessGoal: { type: String, default: 'Stay active' },
}, { timestamps: true });

const teamSchema = new Schema<TeamDocument>({
  name: { type: String, required: true, unique: true },
  description: { type: String, default: 'A focused training team' },
}, { timestamps: true });

const activitySchema = new Schema<ActivityDocument>({
  title: { type: String, required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, default: 30 },
}, { timestamps: true });

const leaderboardEntrySchema = new Schema<LeaderboardEntryDocument>({
  username: { type: String, required: true },
  score: { type: Number, default: 0 },
  rank: { type: Number, default: 0 },
}, { timestamps: true });

const workoutSchema = new Schema<WorkoutDocument>({
  name: { type: String, required: true },
  focus: { type: String, required: true },
  durationMinutes: { type: Number, default: 45 },
}, { timestamps: true });

export const UserModel: Model<UserDocument> = mongoose.model<UserDocument>('User', userSchema);
export const TeamModel: Model<TeamDocument> = mongoose.model<TeamDocument>('Team', teamSchema);
export const ActivityModel: Model<ActivityDocument> = mongoose.model<ActivityDocument>('Activity', activitySchema);
export const LeaderboardEntryModel: Model<LeaderboardEntryDocument> = mongoose.model<LeaderboardEntryDocument>('LeaderboardEntry', leaderboardEntrySchema);
export const WorkoutModel: Model<WorkoutDocument> = mongoose.model<WorkoutDocument>('Workout', workoutSchema);

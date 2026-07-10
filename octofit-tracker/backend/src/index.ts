import express, { type Request, type Response } from 'express';
import connectToDatabase from './config/database';
import {
  ActivityModel,
  LeaderboardEntryModel,
  TeamModel,
  UserModel,
  WorkoutModel,
} from './models';

const app = express();
const port = Number(process.env.PORT ?? 8000);
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', baseUrl });
});

app.get(['/api/users', '/api/users/'], async (_req: Request, res: Response) => {
  const users = await UserModel.find({});
  res.json(users);
});

app.post(['/api/users', '/api/users/'], async (req: Request, res: Response) => {
  const user = await UserModel.create(req.body);
  res.status(201).json(user);
});

app.get(['/api/teams', '/api/teams/'], async (_req: Request, res: Response) => {
  const teams = await TeamModel.find({});
  res.json(teams);
});

app.post(['/api/teams', '/api/teams/'], async (req: Request, res: Response) => {
  const team = await TeamModel.create(req.body);
  res.status(201).json(team);
});

app.get(['/api/activities', '/api/activities/'], async (_req: Request, res: Response) => {
  const activities = await ActivityModel.find({});
  res.json(activities);
});

app.post(['/api/activities', '/api/activities/'], async (req: Request, res: Response) => {
  const activity = await ActivityModel.create(req.body);
  res.status(201).json(activity);
});

app.get(['/api/leaderboard', '/api/leaderboard/'], async (_req: Request, res: Response) => {
  const entries = await LeaderboardEntryModel.find({}).sort({ score: -1 });
  res.json(entries);
});

app.post(['/api/leaderboard', '/api/leaderboard/'], async (req: Request, res: Response) => {
  const entry = await LeaderboardEntryModel.create(req.body);
  res.status(201).json(entry);
});

app.get(['/api/workouts', '/api/workouts/'], async (_req: Request, res: Response) => {
  const workouts = await WorkoutModel.find({});
  res.json(workouts);
});

app.post(['/api/workouts', '/api/workouts/'], async (req: Request, res: Response) => {
  const workout = await WorkoutModel.create(req.body);
  res.status(201).json(workout);
});

connectToDatabase()
  .then(() => {
    app.listen(port, '0.0.0.0', () => {
      console.log(`Backend listening on port ${port}`);
      console.log(`API base URL: ${baseUrl}`);
    });
  })
  .catch((error: unknown) => {
    console.error('Failed to start backend:', error);
    process.exit(1);
  });

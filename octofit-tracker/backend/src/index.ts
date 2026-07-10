import express from 'express';
import connectToDatabase from './config/database';

const app = express();
const port = Number(process.env.PORT ?? 8000);

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Backend listening on port ${port}`);
    });
  })
  .catch((error: unknown) => {
    console.error('Failed to start backend:', error);
    process.exit(1);
  });

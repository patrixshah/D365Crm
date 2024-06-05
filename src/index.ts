import express from 'express';
import accountRoutes from './routes/accountRoutes';
import contactRoutes from './routes/contactRoutes';
import leadRoutes from './routes/leadRoutes';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT!;

app.use('/v1/accounts', accountRoutes);
app.use('/v1/contacts', contactRoutes);
app.use('/v1/leads', leadRoutes);

app.use('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Dynamics 365 API!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

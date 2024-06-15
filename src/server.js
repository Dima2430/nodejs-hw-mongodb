import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';
import { getContacts } from './services/contacts.js';
import { getContactById } from './services/contacts.js';
const port = Number(env('PORT', 3000));
export const startServer = () => {
  const app = express();
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
  });
  app.get('/contacts', async (req, res) => {
    const contacts = await getContacts();
    res.status(200).json({
      message: 'Successfully found contacts!',
      data: contacts,
    });
  });

  app.get('/contacts/:id', async (req, res) => {
    const contact = await getContactById(req.params.id);
    if (!contact) {
      res.status(404).json({
        message: 'Contact not found',
      });
      return;
    }

    res.status(200).json({
      message: `Successfully found contact with id ${req.params.id}!`,
      data: contact,
    });
  });

  app.use('*', (req, res) => {
    res.status(404).json({
      message: 'Not found',
    });
  });
  app.use((err, req, res, next) => {
    res.status(500).json({
      message: err.message,
      error: err.message,
    });
  });
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
};

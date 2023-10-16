import express from 'express';
import cors from 'cors';

import { data } from './respository/database.js';

const app = express();

app.use(cors());

app.get('/api', (_, res) => res.json(data));

app.use('/images', express.static('images'));
app.use('/', express.static('build'));

app.use((_, res) => res.redirect('/'));

app.listen(8080, () => console.log('Server running on port 8080'))
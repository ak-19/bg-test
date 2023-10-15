import express from 'express';
import cors from 'cors';
import { movies } from './movies.js';
import { genres } from './genres.js';

const app = express();

app.use(cors());

app.get('/api', (_, res) => res.json({ movies, genres }));

app.use('/images', express.static('images'));
app.use('/', express.static('build'));

app.listen(8080, () => console.log('Server running on port 8080'))
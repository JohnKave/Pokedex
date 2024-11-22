import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import pokemons from './routes/pokemons.js';
import logger from './middleware/logger.js';
import notFound from './middleware/notFound.js';
import errorHandler from './middleware/error.js';
const port = process.env.PORT || 8000;

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename);

const app = express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//logger middleware
app.use(logger);

// setup static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/pokemons', pokemons);

// error handler
app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>console.log(`Server is running on port ${port}`));



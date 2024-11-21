import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/recipes', (req, res) => {
  fs.readFile('public/recipes.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.json(JSON.parse(data));

  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
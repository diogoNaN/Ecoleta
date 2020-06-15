import express from 'express';

const app = express();

app.get('/users', (req,res) => {
  res.json({
    name: "Diogo",
    age: 23
  })
})

app.listen(3333);
import express from 'express';

const app = express();

app.get('/api',(req,res)  =>

      {
        const jokes =[
            {
              id:1,
              title: "a webpage",
              content: "the webpage for the best interface",
            },
            {
              id:2,
              title: "similar webpage",
              content: "the webpage for the best interface similar side",
            },
];
  res.send(jokes);
      }

);

// app.get('/',() =>  {
//   res.send('Server is ready');
// });
const port=process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

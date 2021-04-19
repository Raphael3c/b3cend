import express, { json, response } from 'express'

const app = express();

app.listen(3333, () => console.log("Server is running on port 3333"))

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({
    message: "Hello world"
  })
})
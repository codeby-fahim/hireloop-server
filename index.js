import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 5000 ;

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
  res.send("Welcome hireloop server")
})


app.listen(port, ()=>{
  console.log(`hireloop server is running on port ${port}`);
})
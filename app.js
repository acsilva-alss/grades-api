import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {gradeRouter} from './routes/gradeRouter.js';
const app = express();

//define o dominio de origem para consumo do servico
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(gradeRouter)
app.get('/', (req, res) => {
  res.send('API em execucao');
});

app.listen(process.env.PORT || 8081, () => {
  console.log('API started')
});

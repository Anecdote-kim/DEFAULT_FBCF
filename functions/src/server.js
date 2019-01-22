// @flow
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import api from './routes';
import { creator, JSON } from './configs/types';

class Server {
  app: express

  constructor() {
    this.app = express();
    this.middleWares();
    admin.initializeApp();
  }

  middleWares(): void {
    const { app } = this;
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());
    app.use('/', api);
    app.all('*', (req, res) => {
      const json: JSON = creator.json(false, { error: 0 });
      res.status(404).json(json);
    });
  }

  listen(port: number): void {
    const { app } = this;
    app.listen(port);
  }

  functions(): any {
    const { app } = this;
    return functions.https.onRequest(app);
  }
}

export default Server;

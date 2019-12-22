import * as functions from 'firebase-functions';
import * as firebase from 'firebase';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import configuration from './configuration';
firebase.initializeApp(configuration);

import app from './api/v1/app';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

const main = express();

main.use('/api/v1/',app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({extended:false}));
export const apiFunction = functions.https.onRequest(main);

import admin from 'firebase-admin';

//const serviceAccount = require("./permissions.json");
import { readFile } from 'fs/promises';
const serviceAccount = JSON.parse(
  await readFile(
    new URL('./permissions.json', import.meta.url)
  )
);
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://freteson-98009.firebaseio.com"
});

const db = admin.firestore();

export {db};
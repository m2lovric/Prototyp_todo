import { db } from './app'

db.collection('users').get().then(data => {
  console.log(data.docs);
})
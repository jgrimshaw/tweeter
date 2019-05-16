'use strict';

const MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = 'mongodb://localhost:27017/tweeter';

MongoClient.connect(MONGODB_URI, (err, db) => {
  if(err){
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

// We have a connection to the "tweeter" db, starting here.

console.log(`Connected to mongodb: ${MONGODB_URI}`);

// get all the tweets; find them
// db.collection('tweets').find({}, (err, result) => {
// modify the find above so we get the results as an array all at once:
db.collection('tweets').find().toArray({}, (err, result) => {
  // lazy err handling:
  if(err) throw err;

// ==> Fair warning: This is going to log a lot of stuff...
  // console.log('find result: ', result);
  // console.log('type of find result: ', typeof result);

// ==> We can iterate on the cursor to get results, one at a time:
// console.log('for each item yealded by the cursor:');
// result.each((err, item) => console.log(' ', item));
// ==> replacin the result.each above

// result.toArray((err, resultArray) => {
//   if(err)throw err;
//   console.log('result.toArray: ', resultArray);
// })

// logging results after modifying the find to find().toArray
console.log('result array: ', result);

// ==> This is inside this callback now. Think about it:
// This is now the "end of the program", right?.
  db.close();
});
// ==> In typical node-callback style, any program
//     logic that needs to use the connection needs
//     to be invoked from within here.
//
// Another way to say: this is an "entry point" for
// a database-connected application!

// ==> At the end, we close the connection:
// db.close();

});

// refactor
// ==========================================================

















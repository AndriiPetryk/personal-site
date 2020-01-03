import session from 'express-session';
import { MONGODB_URI } from '../constants/constants';

const MongoDBStore = require('connect-mongodb-session')(session);

const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});

export default store;

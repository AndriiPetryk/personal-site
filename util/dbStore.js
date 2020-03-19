import session from 'express-session';
import { MONGODB_URI_ATLAS } from '../constants/constants';

const MongoDBStore = require('connect-mongodb-session')(session);

const store = new MongoDBStore({
  uri: MONGODB_URI_ATLAS,
  collection: 'sessions'
});

export default store;

import Interests from '../models/interests';

// eslint-disable-next-line consistent-return
const getInterests = async (req, res, next) => {
  try {
    const interestsData = await Interests.find();
    const infoDetails = {
      interestsData,
      path: '/interests'
    };
    res.render('home/interests', infoDetails);
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};

export default getInterests;

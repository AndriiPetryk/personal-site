import Award from '../models/product';

const getAward = async (req, res, next) => {
  try {
    const awardData = await Award.find();
    const infoDetails = {
      awardData,
      path: '/award'
    };
    res.render('home/awards-sertifications', infoDetails);
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};

export default getAward;

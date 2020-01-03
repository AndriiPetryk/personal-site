import Portfolio from '../models/portfolio';

// eslint-disable-next-line consistent-return
const getEducation = async (req, res, next) => {
  try {
    const portfolioData = await Portfolio.find();
    console.log('portfolioData', portfolioData);
    const infoDetails = {
      portfolioData,
      path: '/portfolio'
    };
    res.render('home/portfolio', infoDetails);
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};

export default getEducation;

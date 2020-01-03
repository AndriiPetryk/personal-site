import About from '../models/about';

// eslint-disable-next-line consistent-return
const getAbout = async (req, res, next) => {
  try {
    const aboutData = await About.find();
    const infoDetails = {
      aboutData,
      path: '/about'
    };
    res.render('home/personal-information', infoDetails);
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};

export default getAbout;

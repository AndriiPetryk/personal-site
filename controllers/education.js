import Education from '../models/education';

// eslint-disable-next-line consistent-return
const getEducation = async (req, res, next) => {
  try {
    const educationData = await Education.find();
    const infoDetails = {
      educationData,
      path: '/education'
    };
    res.render('home/education', infoDetails);
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};

export default getEducation;

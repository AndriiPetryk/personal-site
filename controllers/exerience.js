import Experience from '../models/experience';

// eslint-disable-next-line consistent-return
const getExperience = async (req, res, next) => {
  try {
    const experienceData = await Experience.find();
    const infoDetails = {
      experienceData,
      path: '/experience'
    };
    res.render('home/resume-section', infoDetails);
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};

export default getExperience;

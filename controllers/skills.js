import Skills from '../models/skills';

// eslint-disable-next-line consistent-return
const getSkills = async (req, res, next) => {
  try {
    const skillsData = await Skills.find();
    console.log('skillsData', skillsData);
    const infoDetails = {
      skillsData,
      path: '/about'
    };
    res.render('home/skills', infoDetails);
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};

export default getSkills;

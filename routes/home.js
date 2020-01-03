import express from 'express';

import getAboutController from '../controllers/about';
import getExperienceController from '../controllers/exerience';
import getPortfolioController from '../controllers/portfolio';
import getEducationController from '../controllers/education';
import getSkillsController from '../controllers/skills';
import getInterestsController from '../controllers/interests';
import getAwardController from '../controllers/award';

const router = express.Router();

router.get('/', getAboutController);

router.get('/experience', getExperienceController);

router.get('/portfolio', getPortfolioController);

router.get('/education', getEducationController);

router.get('/skills', getSkillsController);

router.get('/interests', getInterestsController);

router.get('/awards', getAwardController);

export default router;

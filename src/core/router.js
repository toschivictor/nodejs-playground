import { Router } from 'express';
import { authorizationRequired } from '../middlewares/authorization-required';
import { createTeam } from '../services/create-team';
import { listTeam } from '../services/list-team';

export const router = Router();

router.get('/teams', authorizationRequired(), (request, response, next) =>
  listTeam()
    .then((teams) => response.status(200).json(teams))
    .catch(next)
);

router.post('/teams', authorizationRequired(), (request, response, next) =>
  createTeam(request.body)
    .then((team) => response.status(200).json(team))
    .catch(next)
);

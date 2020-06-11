import { Team } from '../models/team';

export const createTeam = async ({ teamName }) => {
  if (!teamName) {
    const error = new Error();
    error.name = 'ValidationError';
    error.message = 'deu ruim';
    throw error;
  }

  const team = await Team.create({
    teamName,
  });

  return {
    message: 'The team been created',
    name: team.teamName,
  };
};

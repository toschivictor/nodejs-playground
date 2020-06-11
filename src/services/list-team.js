import { Team } from '../models/team';

export const listTeam = async () => {
  const teams = await Team.find().map((teams) =>
    teams.map((team) => ({
      id: team._id,
      name: team.teamName,
    }))
  );

  return { teams };
};

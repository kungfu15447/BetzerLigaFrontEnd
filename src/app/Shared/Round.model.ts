import {Tournament} from './Tournament.model';
import {Match} from './Match.model';
import {UserRound} from './UserRound.model';

export interface Round {
  id: number;
  roundNumber: number;
  tournament?: Tournament;
  tournamentId?: number;
  totalGoals: number;
  matches?: Match[];
  roundPoints?: UserRound;
}

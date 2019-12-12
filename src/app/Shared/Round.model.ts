import {Tournament} from './Tournament.model';
import {Match} from './Match.model';
import {UserRound} from './UserRound.model';

export interface Round {
  id: number;
  roundNumber: number;
  tournament?: Tournament;
  tournamentId?: number;
  TippingDeadLine: Date;
  totalGoals: number;
  tippingDeadLine: Date;
  matches?: Match[];
  roundPoints?: UserRound[];
}

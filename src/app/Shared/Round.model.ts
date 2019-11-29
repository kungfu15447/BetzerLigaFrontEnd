import {Tournament} from './Tournament.model';
import {Match} from './Match.model';

export interface Round {
  id: number;
  roundNumber: number;
  tournament?: Tournament;
  totalGoals: number;
  matches?: Match[];
}

import {Tournament} from './Tournament.model';
import {Match} from './Match.model';

export interface Round {
  Id: number;
  RoundNumber: number;
  Tournament: Tournament;
  TotalGoals: number;
  Matches: Match[];
}

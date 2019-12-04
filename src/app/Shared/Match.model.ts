import {Round} from './Round.model';
import {UserMatch} from './UserMatch.model';

export interface Match {
  id: number;
  homeTeam: string;
  homeScore: number;
  guestTeam: string;
  guestScore: number;
  startDate: Date;
  round: Round[];
  tips: UserMatch[];
}

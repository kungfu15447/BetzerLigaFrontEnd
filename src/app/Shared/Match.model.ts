import {Round} from './Round.model';
import {UserMatch} from './UserMatch.model';

export interface Match {
  Id: number;
  HomeTeam: string;
  HomeScore: number;
  GuestTeam: string;
  GuestScore: number;
  StartDate: Date;
  Round: Round[];
  Tips: UserMatch[];
}

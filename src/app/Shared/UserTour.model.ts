import {User} from './User.model';
import {Tournament} from './Tournament.model';

export interface UserTour {
  user: User;
  userId: number;
  tournament: Tournament;
  tournamentId: number;
  totalUserPoints: number;
}

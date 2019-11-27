import {User} from './User.model';
import {Tournament} from './Tournament.model';

export interface UserTour {
  Id: number;
  User: User[];
  UserId: number;
  Tournament: Tournament[];
  TournamentId: number;
  TotalUserPoints: number;
}

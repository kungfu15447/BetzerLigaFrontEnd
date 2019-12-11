import {User} from './User.model';
import {Match} from './Match.model';

export interface UserMatch {
  id: number;
  user: User;
  userId: number;
  match: Match;
  matchId: number;
  homeTip: number;
  guestTip: number;
  rating: number;
  totalPoints: number;
}

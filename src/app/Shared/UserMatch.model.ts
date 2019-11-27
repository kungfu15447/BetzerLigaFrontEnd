import {User} from './User.model';
import {Match} from './Match.model';

export interface UserMatch {
  Id: number;
  User: User[];
  UserId: number;
  Match: Match[];
  MatchId: number;
  HomeTip: number;
  GuestTip: number;
}

import {User} from './User.model';
import {Round} from './Round.model';


export interface UserRound {
  id?: number;
  user: User;
  userId: number;
  round: Round;
  roundId: number;
  userPoints: number;
}

import {UserTour} from './UserTour.model';
import {UserMatch} from './UserMatch.model';

export interface User {
  id: number;
  firstname: string;
  lastname: string;
  isAdmin: boolean;
  email: string;
  password: string;
  tournaments: UserTour[];
  tips: UserMatch[];
  following: User[];
}

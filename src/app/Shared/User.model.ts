import {UserTour} from './UserTour.model';
import {UserMatch} from './UserMatch.model';

export interface User {
  Id: number;
  Firstname: string;
  Lastname: string;
  IsAdmin: boolean;
  Email: string;
  Password: string;
  Tournaments: UserTour[];
  Tips: UserMatch[];
  Following: User[];
}

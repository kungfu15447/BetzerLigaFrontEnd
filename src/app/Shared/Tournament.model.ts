import {Round} from './Round.model';
import {UserTour} from './UserTour.model';

export interface Tournament {
  Id: number;
  Name: string;
  NumberOfRounds: number;
  isDone: boolean;
  Rounds: Round[];
  Participants: UserTour[];
}

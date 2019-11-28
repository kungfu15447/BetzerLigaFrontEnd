import {Round} from './Round.model';
import {UserTour} from './UserTour.model';

export interface Tournament {
  id: number;
  name: string;
  numberOfRounds: number;
  isDone: boolean;
  rounds: Round[];
  participants: UserTour[];
}

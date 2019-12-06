import {Round} from './Round.model';
import {UserTour} from './UserTour.model';
import DateTimeFormat = Intl.DateTimeFormat;

export interface Tournament {
  id: number;
  name: string;
  numberOfRounds: number;
  isDone: boolean;
  startDate: Date;
  endDate: Date;
  rounds: Round[];
  participants: UserTour[];
}

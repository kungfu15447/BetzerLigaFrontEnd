import {User} from './User.model';

export interface Following {
  authorizedUser: User;
  authorizedUserId: number;
  follow: User;
  followId: number;
}

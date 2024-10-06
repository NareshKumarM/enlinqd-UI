import { Contact } from './index';
import { Survey } from './survey.model';

export interface User extends Contact {
  surevys: Survey[];
  pointsAccumulated: number;
  pointsRedeemed: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

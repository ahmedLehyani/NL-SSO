import {Role} from './role';

export interface CurrentUser {
  id?: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  firstLogin?: boolean;
  birthday?: string;
  createdDate?: string;
  roles: Role[];
}

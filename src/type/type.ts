export interface IToken {
  success: boolean;
  token: string;
}

 

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  position?: string | any;
  position_id?: string;
  photo: string;
  registration_timestamp?: number;
  nameInput?: string | any
}

export interface IUsers {
  success: boolean;
  page: number;
  total_pages: number;
  total_users: number;
  count: number;
  users: IUser[];
}

export interface IPosition {
  id: number;
  name: string;
}

export interface IPositions {
  success: boolean;
  positions: IPosition[];
}
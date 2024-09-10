export interface IUser {
  id: number;
  name: string;
  age: string;
  salary: string;
  isMaried?: boolean; // ? --> partadir dasht chi kara lini kara voch
}

export interface IContext {
  users: IUser[];
  removeUser: (id: number) => void; // inche stanum inch e veradardznum` void
  handleAdd: (user: InputUser) => void;
}

export type InputUser = Omit<IUser, "id">;

export interface Contact {
  Id: string;
  FirstName: string;
  LastName: string;
  Email: string;
  Birthdate: Date;
  Gender: 'M' | 'F';
  IsSystemAdmin: boolean;
}

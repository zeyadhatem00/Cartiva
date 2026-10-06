export interface Address {
  results?: Number;
  status: string;
  message: string;
  data: Data[];
}
export interface Data {
  _id?: string;
  name: string;
  details: string;
  phone: string;
  city: string;
}

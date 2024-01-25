export interface Data {
  name: {
    first: string;
    last: string;
  };
  dob: {
    age: number;
  };
  gender: string;
  email: string;
  phone: string;
  picture: {
    thumbnail: string;
  };
  login: {
    uuid: string;
  };
}

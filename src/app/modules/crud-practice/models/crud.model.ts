export class Brand {
  id: number;
  name: string;
}
export class User {
  id: number;
  name: string;
  email: string;
  contactNo: number;
  brand: number;
  address: AddressDetails[];
}
class AddressDetails {
  city: string;
  state: string;
  pinCode: number;
}
export class Food {
  id: number;
  select: boolean;
  name: string;
}

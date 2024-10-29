export interface Employee {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
}

export interface Laboratory {
  name: string;
  address: string;
  description: string;
}

export interface Location {
  laboratory: Laboratory;
  details: string;
  dateOfArrival: string;
}

export interface TestSample {
  id: string;
  name: string;
  custodian: Employee;
  location: Location;
}

export interface TestSampleSearchResponse {
  data: TestSample[];
}

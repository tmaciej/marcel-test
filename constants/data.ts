import { Laboratory, Employee, TestSample } from "@/definitions/types";

const laboratories: Laboratory[] = [
  {
    name: "Blood Sample Collection Point",
    address: "ul. Wampirów 23, 50-000 Wrocław",
    description: "Here we collect all the blood samples",
  },
  {
    name: "Analysis Lab",
    address: "al. Tęgogłowych 37A, 50-000 Wrocław",
    description: "",
  },
  {
    name: "Cold Storage Facility",
    address: "ul. Mroźna 42C, 50-000 Wrocław",
    description: "",
  },
  {
    name: "Utilization Point",
    address: "ul. Krańcowa 8, 00-001 Warszawa",
    description: "",
  },
];

const employees: Employee[] = [
  {
    fullName: "Maciej Trojan",
    emailAddress: "trojanmaciek@gmail.com",
    phoneNumber: "+49796669667",
  },
  {
    fullName: "Jan Kowalski",
    emailAddress: "jan.kowalski@zlabs.com",
    phoneNumber: "+48123456789",
  },
  {
    fullName: "Anna Nowak",
    emailAddress: "anna.nowak@artctcsolutions.com",
    phoneNumber: "+48987654321",
  },
];

export const samples: TestSample[] = [
  {
    id: "testsample1",
    name: "Blood Sample 123542134",
    custodian: employees[0],
    location: {
      laboratory: laboratories[0],
      details: "In room 1 in my desk's drawer",
      dateOfArrival: "2024-10-01T11:54:32Z",
    },
  },
  {
    id: "bloodsample2",
    name: "Other Sample 123312312321312",
    custodian: employees[1],
    location: {
      laboratory: laboratories[1],
      details:
        "After entering the gate take 40 steps north and 20 steps east. It's under the maple tree.",
      dateOfArrival: "2024-10-26T14:14:14Z",
    },
  },
  {
    id: "secretsample3",
    name: "Very deadly things",
    custodian: employees[2],
    location: {
      laboratory: laboratories[3],
      details: "It's not there, trust me. You will never find it.",
      dateOfArrival: "2024-10-12T22:11:33Z",
    },
  },
];

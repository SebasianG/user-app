import {Role, User} from "../interfaces/user";

export const MOCK_ROLES: Role[] = [
  { id: 1, name: 'Admin' },
  { id: 2, name: 'User' },
  { id: 3, name: 'Moderator' }
];

export const MOCK_USERS: User[] = [
  {
    id: 5,
    firstName: 'Anna',
    lastName: 'Kowalska',
    email: 'anna.kowalska@example.com',
    phone: '+48 123 456 789',
    roleId: 1
  },
  {
    id: 2,
    firstName: 'Jan',
    lastName: 'Nowak',
    email: 'jan.nowak@example.com',
    phone: '+48 987 654 321',
    roleId: 2
  },
  {
    id: 9,
    firstName: 'Ewa',
    lastName: 'Wiśniewska',
    email: 'ewa.wisniewska@example.com',
    phone: '+48 555 111 222',
    roleId: 3
  },
  {
    id: 1,
    firstName: 'Piotr',
    lastName: 'Zieliński',
    email: 'piotr.zielinski@example.com',
    phone: '+48 600 700 800',
    roleId: 1
  },
  {
    id: 8,
    firstName: 'Katarzyna',
    lastName: 'Nowicka',
    email: 'katarzyna.nowicka@example.com',
    phone: '+48 511 222 333',
    roleId: 2
  },
  {
    id: 10,
    firstName: 'Tomasz',
    lastName: 'Kamiński',
    email: 'tomasz.kaminski@example.com',
    phone: '+48 444 555 666',
    roleId: 3
  },
  {
    id: 4,
    firstName: 'Monika',
    lastName: 'Dąbrowska',
    email: 'monika.dabrowska@example.com',
    phone: '+48 777 888 999',
    roleId: 1
  },
  {
    id: 6,
    firstName: 'Robert',
    lastName: 'Lewandowski',
    email: 'robert.lewandowski@example.com',
    phone: '+48 321 654 987',
    roleId: 2
  },
  {
    id: 3,
    firstName: 'Agnieszka',
    lastName: 'Wójcik',
    email: 'agnieszka.wojcik@example.com',
    phone: '+48 800 900 100',
    roleId: 3
  },
  {
    id: 7,
    firstName: 'Michał',
    lastName: 'Krawczyk',
    email: 'michal.krawczyk@example.com',
    phone: '+48 123 321 456',
    roleId: 2
  }
];


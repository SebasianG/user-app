export interface Role {
  id: number;
  name: 'Admin' | 'User' | 'Moderator';
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  roleId: number;
}

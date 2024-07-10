export interface CreateUserDto {
  userName: string;
  userFirstName: string;
  userLastName: string;
  userPassword: string;
  userEmail: string;
  userPhone?: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface UpdateUserDto {
  userId: string;
  userName: string;
  userFirstName: string;
  userLastName: string;
  userPassword: string;
  userEmail: string;
  userPhone?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserDto {
  userId: string;
  userName: string;
}

export interface User{
  name: string | null,
  email: string | null,
  iconUrl: string | null
}

export interface FirebaseAuthUser extends User {
  uid: string,
}

export interface UserState {
  isAuth: boolean,
  user: User
}
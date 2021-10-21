export interface User{
  name: string ,
  email: string ,
  iconUrl: string 
}

export interface FirebaseAuthUser extends User {
  uid: string,
}

export interface UserState {
  isAuth: boolean,
  user: User
}
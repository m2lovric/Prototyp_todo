import { auth } from './app'

export const signUp = (email: string, password: string, passwordConfirm: string) => {
  if (password === passwordConfirm) {
    auth.createUserWithEmailAndPassword(email, password)
      .then((user: object) => {
        return user;
      })
      .catch((err: any) => {
        return err;
      })
  }
}
import { auth } from './app'

export const signUp = (email: string, password: string, password_confirm: string) => {
  if (password === password_confirm) {
    auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('Successfully signed in.');
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
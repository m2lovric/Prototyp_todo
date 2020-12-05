import { auth } from './app'
import { store } from '../../wrap-with-provider'
import { userExist } from '../redux/actions'

export const authState = auth.onAuthStateChanged((user) => {
  store.dispatch(userExist(user));
  return user;
})

export const signUp = (email: string, password: string, passwordConfirm: string) => {
  if (password === passwordConfirm) {
    auth.createUserWithEmailAndPassword(email, password)
      .then((data: object) => {
        return data;
      })
      .catch ((err: any) => {
        return err;
      })
  }
}
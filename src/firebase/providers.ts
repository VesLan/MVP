import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(
      FirebaseAuth,
      googleProvider,
    );

    const { displayName, email, photoURL, uid } =
      result.user;
    console.log(displayName, email, photoURL, uid);
    return uid;
  } catch (err) {
    console.error(err);
  }
};

type StateDispatch = any;

export const authStateChange = (
  setSession: StateDispatch,
) => {
  onAuthStateChanged(FirebaseAuth, (user) => {
    if (!user) {
      return setSession({
        status: 'no-authenticated',
        userId: null,
      });
    }

    setSession({
      status: 'authenticated',
      userId: user!.uid,
    });
  });
};

export const logoutFirebase = async () => {
  await FirebaseAuth.signOut();
};

interface PropsRegister {
  email: string;
  password: string;
}

export const signInWithCredentials = async ({
  email,
  password,
}: PropsRegister) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password,
    );
    return resp.user.uid;
  } catch (e) {
    alert((e as Error).message);
  }
};

export const loginWithCredentials = async ({
  email,
  password,
}: PropsRegister) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password,
    );
    return resp.user.uid;
  } catch (e) {
    alert((e as Error).message);
  }
};

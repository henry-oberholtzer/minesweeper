import React, {useState, useEffect} from 'react';
import {getAuth, onAuthStateChanged, User} from 'firebase/auth';

const auth = getAuth();

export function useAuth() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubFromAuthStatusChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined)
      }
    });
    return unsubFromAuthStatusChanged;
  }, []);

  return {user};
}

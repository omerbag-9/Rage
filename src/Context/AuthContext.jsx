import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

// Create the AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // want to fetch the user data using axios when i login successfully
  async function fetchUser() {
    const token = Cookies.get('token');
    if (token) {
      const { data } = await axios.get('https://rage-three.vercel.app/user/my-profile', {
        headers: {
          token: `${token}`,
        },
      }).catch((err) => {
        console.log(err);
      });
      // console.log(data);
      if (data.success) {
        setUser(data?.data);
        
      }
    }
  }
  useEffect(() => {
    fetchUser();
  },[1])
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
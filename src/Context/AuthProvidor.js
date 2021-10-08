import React, { createContext } from 'react';
import UseFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvidor = ({ children }) => {
    const allContext = UseFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvidor;
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sesionActiva = localStorage.getItem('sesion_activa');
    const datosUser = localStorage.getItem('usuario_arplus');
    
    if (sesionActiva === 'true' && datosUser) {
      setUser(JSON.parse(datosUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const datosGuardados = localStorage.getItem('usuario_arplus');
    if (!datosGuardados) return { success: false, message: "No hay registros." };

    const usuario = JSON.parse(datosGuardados);
    if (usuario.email === email && usuario.password === password) {
      localStorage.setItem('sesion_activa', 'true');
      setUser(usuario);
      return { success: true };
    }
    return { success: false, message: "Credenciales incorrectas." };
  };

  const logout = () => {
    localStorage.removeItem('sesion_activa');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
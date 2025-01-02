import React, { useEffect } from 'react';

const LoginPage: React.FunctionComponent = () => {
  const handleLogin = () => {
    localStorage.setItem('accessToken', 'access-token');
    window.location.reload();
  };

  return (
    <div>
          <label >
            Inicio de Sesión
          </label>
        <button
          onClick={handleLogin}
        >
          <span>Azure Active Directory</span>
        </button>
    </div>
  );
};

export default LoginPage;

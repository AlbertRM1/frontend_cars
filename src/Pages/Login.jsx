import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:8080/api/users/allUsers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        const responseData = await response.json();
        const token = responseData.token;

        // Almacenar el token en el almacenamiento local
        localStorage.setItem('authToken', token);
        setLoggedIn(true);

        // Redirigir al usuario a la página /models después del inicio de sesión exitoso
        window.location.href = '/api/cars/allCars';
      } else if (response.status === 401) {
        alert('Credenciales incorrectas');
      } else {
        console.error('Error en la solicitud:', response.status);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  useEffect(() => {
    // Verificar si hay un token de autenticación almacenado en el almacenamiento local
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <>
      <section className="contact-page">
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Create your free account on our website</h2>
              <h2>Create your free account on our website</h2>
              <p>
                With your account you can manage your activity
                whenever and wherever you want. This way you can
                control your appraisals, purchases and sales at
                any time without problems.
              </p>
              <p>
                Save, manage and receive your latest searches
                in your email and on your smartphone.
              </p>
              <p>
                It's an easy way to manage your appraisals and offers.
              </p>
              <p className="copyright">
                By registering you accept our{' '}
                <a href="/conditions">terms and conditions</a> as well as our{' '}
                <a href="/privacy">privacy policy</a>.
              </p>
            </div>
            <div className="contact-div__form">
              {loggedIn ? (
                // Si el usuario está conectado, redirigir al usuario a /models
                (window.location.href = '/api/cars/allCars')
              ) : (
                // Si el usuario no está conectado, mostrar el formulario de inicio de sesión
                <form onSubmit={handleLogin}>
                  <h2 className="title">Login</h2>
                  <br />

                  <label>Username:
                    <br />
                    <input
                      name="username"
                      type="text"
                      id="txtUsername"
                      className='usernamelogin'
                      autoComplete='username'
                      placeholder="Username"
                      value={username}
                      onChange={handleUsernameChange}
                    />
                  </label>

                  <label>Password:
                    <br />
                    <input
                      name="password"
                      type="password"
                      id="txtPassword"
                      className='passwordlogin'
                      autoComplete='current-password'
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </label>

                  <p className="preg">Haven't registered yet?</p>
                  <a href="/api/users/createUser" className="preg">
                    Register
                  </a>
                  <br />
                  <button className="ButtonSub" type="submit">
                    Login
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

import React, { useState } from 'react';
import Footer from '../components/Footer';

export const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegisterAndLogin = async (e) => {
    e.preventDefault();

    const data = {
      username: username,
      email: email,
      password: password,
    };

    try {
      // Paso 1: Registrar al usuario
      const registerResponse = await fetch(
        'http://localhost:8080/api/users/createUser',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      if (registerResponse.status === 201) {
        // Usuario creado con éxito

        // Paso 2: Iniciar sesión para obtener un token
        const loginData = {
          email: email,
          password: password,
        };

        const loginResponse = await fetch(
          'http://localhost:8080/api/users/allUsers',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
          }
        );

        if (loginResponse.status === 200) {
          // Inicio de sesión exitoso, obtén el token
          const { token } = await loginResponse.json();

          // Almacena el token en el almacenamiento local (localStorage) o en las cookies
          localStorage.setItem('authToken', token);

          // Redirige al usuario a la página /models o a donde desees
            window.location.href = '/api/cars/allCars';
        } else if (loginResponse.status === 401) {
          alert('Login incorrecto');
        } else {
          console.error('Error en la solicitud de inicio de sesión:', loginResponse.status);
        }
      } else {
        // Manejar el caso de error al registrar
        console.error('Error en la solicitud al registrar:', registerResponse.status);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <>
      <section className="contact-page">
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
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
              <form onSubmit={handleRegisterAndLogin}>
                <h2 className="title">Register</h2>
                <br />
                <label>Username:
                  <br />
                  <input
                    name="username"
                    type="text"
                    id="txtUsername"
                    autoComplete="username"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </label>

                <label>Email:
                  <br />
                  <input
                    name="email"
                    type="text"
                    id="txtEmail"
                    autoComplete="off"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </label>

                <label>Password:
                  <br />
                  <input
                    name="pass"
                    type="password"
                    id="txtPass"
                    autoComplete="current-password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </label>

                <p className="preg">Already have an account?</p>
                <a href="/api/users/allUsers" className="preg">
                  Sign In
                </a>
                <br />
                <button type="submit" className="ButtonSub">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

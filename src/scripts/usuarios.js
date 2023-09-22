function login() {
    let miEmail = document.getElementById("txtEmail").value;
    let miPass = document.getElementById("txtPass").value;
  
    try {
      fetch('http://localhost:5000/usuarios/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: miEmail,
          pass: miPass
        })
      })
      .then(response => {
        if (response.status === 200) {
          return response.text();
        } else {
          throw new Error("Login incorrecto");
        }
      })
      .then(data => {
        // Redireccionar después de un inicio de sesión exitoso
        window.location.href = "/models";
      })
      .catch(error => {
        console.error("Error en la solicitud:", error);
        alert("Login incorrecto");
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  function crear() {
    let miEmail = document.getElementById("txtEmail").value;
    let miPass = document.getElementById("txtPass").value;
  
    try {
      fetch('http://localhost:5000/usuarios/create', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: miEmail,
          pass: miPass
        })
      })
      .then(response => {
        if (response.status === 200) {
          alert("Usuario creado");
        } else {
          throw new Error("Error en la solicitud: " + response.status);
        }
      })
      .then(data => {
        // Redireccionar después de un inicio de sesión exitoso
        window.location.href = "/models";
      })
      .catch(error => {
        console.error("Error en la solicitud:", error);
      });
    } catch (error) {
      console.error(error);
    }
  }
  
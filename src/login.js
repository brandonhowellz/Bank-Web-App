function Login() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleLogin() {
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;

    const user = ctx.users.find((u) => u.email === email && u.password === password);

    if (user) {
      ctx.currentUser = user;
      setStatus(`Welcome back, ${user.name}!`);
      setEmail('');
      setPassword('');
      setTimeout(() => {
        setStatus('');
        setShow(false);
      }, 3000);
    } else {
      setStatus('Error: Invalid email or password. Please Try Again');
      setTimeout(() => setStatus(''), 3000);
    }
  }

  function clearForm() {
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="info"
      header="Login"
      status={status}
      body={
        show ? (
          <>
            Email address<br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password<br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleLogin}
            >
              Login
            </button>
          </>
        ) : (
          <>
            <h5>Login Successful</h5>
            <button
              type="submit"
              className="btn btn-light"
              onClick={clearForm}
            >
              Continue
            </button>
          </>
        )
      }
    />
  );
}

<Route path="login" component={Login} />
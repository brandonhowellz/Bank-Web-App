function Balance() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const ctx = React.useContext(UserContext);

  React.useEffect(() => {
    // Automatically show the balance when the component is mounted
    handleShowBalance();
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  function handleShowBalance() {
    const currentUser = ctx.currentUser;

    if (currentUser) {
      setStatus(`Your current balance is $${currentUser.balance}`);
      setShow(false);
    } else {
      setStatus('Error: User not found');
      setTimeout(() => setStatus(''), 3000);
    }
  }

  function clearStatus() {
    setStatus('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="warning"
      header="Account Balance"
      status={status}
      body={
        <>
          {show ? (
            <p>Loading balance...</p>
          ) : (
            <>
              <h5>Your Current Balance</h5>
              <p>{status}</p>
              <button
                type="submit"
                className="btn btn-light"
                onClick={clearStatus}
              >
                Close
              </button>
            </>
          )}
        </>
      }
    />
  );
}

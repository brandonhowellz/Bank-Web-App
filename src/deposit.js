function Deposit() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleDeposit() {
    if (!validate(amount, 'amount')) return;

    const currentUser = ctx.currentUser;

    if (currentUser) {
      const depositAmount = parseFloat(amount);
      if (!isNaN(depositAmount) && depositAmount > 0) {
        currentUser.balance += depositAmount;
        setStatus(`Successfully deposited $${amount}`);
        setAmount('');
        setTimeout(() => {
          setStatus('');
          setShow(true);
        }, 3000);
      } else {
        setStatus('Error: Please enter a valid positive amount');
        setTimeout(() => setStatus(''), 3000);
      }
    } else {
      setStatus('Error: User not found');
      setTimeout(() => setStatus(''), 3000);
    }
  }

  function clearForm() {
    setAmount('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="success"
      header="Deposit Money"
      status={status}
      body={
        <>
          <h5>Balance</h5>
          <p>${ctx.currentUser?.balance.toFixed(2)}</p>
          <hr />
          {show ? (
            <>
              Amount<br />
              <input
                type="number"
                className="form-control"
                id="amount"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.currentTarget.value)}
              />
              <br />
              <button
                type="submit"
                className="btn btn-light"
                onClick={handleDeposit}
                disabled={!amount} // Disable the button if amount is empty
              >
                Deposit
              </button>
            </>
          ) : (
            <>
              <h5>Success</h5>
              <button
                type="submit"
                className="btn btn-light"
                onClick={clearForm}
              >
                Make another deposit
              </button>
            </>
          )}
        </>
      }
    />
  );
}


<Route path="deposit" component={Deposit} />
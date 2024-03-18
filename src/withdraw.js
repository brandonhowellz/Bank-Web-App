function Withdraw() {
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

  function handleWithdraw() {
    if (!validate(amount, 'amount')) return;

    const currentUser = ctx.currentUser;

    if (currentUser) {
      const withdrawalAmount = parseFloat(amount);
      if (!isNaN(withdrawalAmount) && withdrawalAmount > 0) {
        if (withdrawalAmount <= currentUser.balance) {
          currentUser.balance -= withdrawalAmount;
          setStatus(`Successfully withdrew $${amount}`);
          setAmount('');
          setTimeout(() => {
            setStatus('');
            setShow(true);
          }, 3000);
        } else {
          setStatus('Error: Insufficient funds');
          setTimeout(() => setStatus(''), 3000);
        }
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
      bgcolor="danger"
      header="Withdraw Money"
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
                onClick={handleWithdraw}
                disabled={!amount} // Disable the button if amount is empty
              >
                Withdraw
              </button>
            </>
          ) : (
            <>
              <h5>Withdrawal Successful</h5>
              <button
                type="submit"
                className="btn btn-light"
                onClick={clearForm}
              >
                Make another withdrawal
              </button>
            </>
          )}
        </>
      }
    />
  );
}
<Route path="withdraw" component={Withdraw} />



function Spa() {
    return (
      <HashRouter>
        <NavBar />
        <UserContext.Provider value={{ users: [] }}>
          <div className="container" style={{ padding: "20px" }}>
            <Route path="/" exact component={Home} />
            <Route path="/createaccount" component={CreateAccount} />
            <Route path="/deposit" component={Deposit} />
            <Route path="/withdraw" component={Withdraw} />
            <Route path="/all-data" component={AllData} />
            <Route path="/login" component={Login} />
          </div>
        </UserContext.Provider>
      </HashRouter>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Spa />);
  
function Navbar(){
    return(
        <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">BadBank</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#"></a>
        <a className="nav-link" href="#/CreateAccount/">Create Account</a>
        <a className="nav-link" href="#/login/">Login</a>
        <a className="nav-link" href="#/deposit/">Deposit</a>
        <a className="nav-link" href="#/AtmDeposit/">ATM</a>
        <a className="nav-link" href="#/balance/">Balance</a>
        <a className="nav-link" href="#/alldata/">All Data</a>
      </div>
    </div>
  </div>
</nav>
        </>
    );
}

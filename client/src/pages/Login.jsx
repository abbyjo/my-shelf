const Login = () => {

    return (
      <section className="mx-4">
        <form className="m-5 align-items-center">
          <div className="mb-3 w-75">
            <label for="email" className="form-label">Username</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3 w-75">
            <label for="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <button type="submit" className="btn btn-warning">Enter</button>
        </form>
      </section>
    );
  };
  
  export default Login;
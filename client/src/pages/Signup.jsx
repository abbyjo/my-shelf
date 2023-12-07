import '../styles/SignUp.css';

const Signup = () => {

  return (
    <main>
      <section className="mx-4">
        <form className="m-5">
          <div className="mb-3 w-75">
            <label for="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3 w-75">
            <label for="username" className="form-label">Username</label>
            <input type="username" className="form-control" id="username" aria-describedby="username" />
          </div>
          <div className="mb-3 w-75">
            <label for="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="my-5">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="icon-select" id="icon-1" value="" />
              <label class="form-check-label" for="icon-1"><img className="reader-icon" src="https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg" /></label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="icon-select" id="icon-2" value="" />
              <label class="form-check-label" for="icon-2"><img className="reader-icon" src="https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg" /></label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="icon-select" id="icon-3" value="" />
              <label class="form-check-label" for="icon-3"><img className="reader-icon" src="https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg" /></label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="icon-select" id="icon-4" value="" />
              <label class="form-check-label" for="icon-4"><img className="reader-icon" src="https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg" /></label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="icon-select" id="icon-5" value="" />
              <label class="form-check-label" for="icon-5"><img className="reader-icon" src="https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg"></img></label>
            </div>
          </div>
          <div className="col my-3">
            <button type="submit" className="btn btn-warning">Sign-up</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Signup;
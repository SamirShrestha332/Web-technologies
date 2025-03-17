export default function Log_in_Card() {
  return (
    <>
      <div className="container">
        <div className="login-card">
          <div className="header">
            <div><ion-icon name="close-outline" title=""></ion-icon></div>
            <div ><ion-icon name="logo-twitter" className="twitterlogo"></ion-icon></div>
          
          </div>

          <div className="loginSection">
            <div className="heading-text">
              <h1>Sign in to X</h1>
            </div>
            <div className="inputsection">
              <div className="signupBtn_apple">
                <ion-icon name="logo-apple"></ion-icon>
                <p className="signupBtn_apple_text">Sign in with apple</p>
              </div>
              <div className="linebreak">
                <div className="linebreak1"></div>
                <p>or</p>
                <div className="linebreak2"></div>
                 </div>
              <input type="text" placeholder="Phone,email or username" className="EmailInput" /> <br />
              <button className="nextbtn">Next</button> <br />
              <button className="forgotBtn">Forgot password?</button> <br />

              <div className="createaccountsection">
                <p>
                  Don't have an account? <a href="#"> Sign up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

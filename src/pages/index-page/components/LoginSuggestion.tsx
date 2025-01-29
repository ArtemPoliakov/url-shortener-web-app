import classes from "./../styles/index-styles.module.css";
import buttonClasses from "./../../../global_styles/buttons.module.css";

interface LoginProps {
  children: string;
}

const LoginSuggestion = ({ children }: LoginProps) => {
  return (
    <div className={classes.loginSuggestion}>
      <h3 className={classes.loginHeader}>{children}</h3>
      <button
        className={buttonClasses.primary + " " + classes.loginButton}
        onClick={redirectToLogin}
      >
        Login
      </button>
      <span className={classes.orText}>or</span>
      <button
        className={buttonClasses.secondary + " " + classes.signUpButton}
        onClick={redirectToSignUp}
      >
        Sign up
      </button>
    </div>
  );
};

const redirectToLogin = () => {
  alert("Redirecting to login page");
};

const redirectToSignUp = () => {
  alert("Redirecting to sign up page");
};

export default LoginSuggestion;

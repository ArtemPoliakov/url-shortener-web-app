import classes from "./styles/index-styles.module.css";
import LoginSuggestion from "./components/LoginSuggestion";

const Index = () => {
  return (
    <div className={classes.gridGlobalContainer}>
      <h1 className={classes.heading}>URL shortener</h1>
      <h2 className={classes.slogan}>Transform your links in a few clicks!</h2>
      <LoginSuggestion>To continue, please:</LoginSuggestion>
    </div>
  );
};

export default Index;

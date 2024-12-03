import Button from "@components/StyledButton";
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form className={styles.form}>
        <div className={styles["input-group"]}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className={styles.input} required />
        </div>
        <div className={styles["input-group"]}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className={styles.input}
            required
          />
        </div>
        <Button bg="gray" color="blue">
          회원가입
        </Button>
        <Button bg="yellow" color="red">
          카카오 로그인
        </Button>
        <Button type="submit">로그인</Button>
      </form>
    </div>
  );
}

export default Login;

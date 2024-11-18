import { useState, useRef } from "react";

const errorStyle = {
  fontSize: "12px",
  color: "red",
  fontWeight: "bold",
};

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    cellphone: "010",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    cellphone: "",
  });

  const nameInput = useRef();
  const emailInput = useRef();
  const cellphoneInput = useRef();

  const handleChange = (e) => {
    const newUser = {
      ...user,
      [e.target.name]: e.target.value,
    };

    setUser(newUser);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let newErrors = {
      name: "",
      email: "",
      cellphone: "",
    };
    const emailExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const cellphoneExp = /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/;

    const onErrorSet = (errorKey, errorMsg, ref) => {
      newErrors = {
        ...newErrors,
        [errorKey]: errorMsg,
      };
      setErrors(newErrors);

      ref.current.focus();
      return;
    };

    // 이름 검증
    if (user.name.trim().length < 2) {
      onErrorSet("name", "이름은 2자 이상 입력해주세요.", nameInput);
      return;
    }

    // 이메일 검증
    // 즉시 실행 함수로 정의
    (() => {
      if (user.email.trim().length === 0) {
        onErrorSet("email", "이메일을 입력해주세요.", emailInput);
        return;
      } else if (!emailExp.test(user.email)) {
        onErrorSet("email", "이메일을 확인해주세요.", emailInput);
        return;
      }
    })();

    // 휴대폰 번호 검증
    // 즉시 실행 함수로 정의
    (() => {
      if (user.cellphone.trim().length === 0) {
        onErrorSet("cellphone", "휴대폰 번호를 입력해주세요.", cellphoneInput);
        return;
      } else if (!cellphoneExp.test(user.cellphone)) {
        onErrorSet("cellphone", "휴대폰 번호를 확인해주세요.", cellphoneInput);
        return;
      }
    })();

    // 검증 실패 시 처리
    // if (newErrors.name || newErrors.email || newErrors.cellphone) {
    //   setErrors(newErrors);
    // } else {
    //   setErrors({
    //     name: "",
    //     email: "",
    //     cellphone: "",
    //   });
    // }
  };

  return (
    <>
      <h1>05 회원가입 입력값 상태 관리</h1>

      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">이름</label>
          <input
            id="name"
            name="name"
            ref={nameInput}
            value={user.name}
            onChange={handleChange}
          />
          <br />
          <p style={errorStyle}>{!!errors.name && errors.name}</p>
        </div>

        <div>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            name="email"
            ref={emailInput}
            value={user.email}
            onChange={handleChange}
          />
          <br />
          <p style={errorStyle}>{!!errors.email && errors.email}</p>
        </div>

        <div>
          <label htmlFor="cellphone">휴대폰</label>
          <input
            id="cellphone"
            name="cellphone"
            ref={cellphoneInput}
            value={user.cellphone}
            onChange={handleChange}
          />
          <br />
          <p style={errorStyle}>{!!errors.cellphone && errors.cellphone}</p>
        </div>

        <button type="submit">가입</button>
      </form>

      <div>
        <p>
          이름: <br />
        </p>
        <p>
          이메일: <br />
        </p>
        <p>
          휴대폰: <br />
        </p>
      </div>
    </>
  );
}

export default App;

import { useForm } from "react-hook-form";

const errorStyle = {
  fontSize: "12px",
  color: "red",
  fontWeight: "bold",
};

const emailExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const cellphoneExp = /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/;

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      cellphone: "",
    },
  });

  const onSubmit = (user) => {
    console.log("submit", user);
  };

  return (
    <>
      <h1>05 회원가입 입력값 상태 관리</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">이름</label>
          <input
            id="name"
            {...register("name", {
              required: "이름을 입력해주세요.",
              minLength: {
                value: 2,
                message: "이름은 2자 이상 입력해주세요.",
              },
            })}
            // name="name"
            // ref={nameInput}
            // value={user.name}
            // onChange={handleChange}
          />
          <br />
          <p style={errorStyle}>{!!errors.name && errors.name.message}</p>
        </div>

        <div>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            {...register("email", {
              required: "이메일을 입력해주세요.",
              pattern: {
                value: emailExp,
                message: "이메일 양식에 맞지 않습니다.",
              },
            })}
            // name="email"
            // ref={emailInput}
            // value={user.email}
            // onChange={handleChange}
          />
          <br />
          <p style={errorStyle}>{!!errors.email && errors.email.message}</p>
        </div>

        <div>
          <label htmlFor="cellphone">휴대폰</label>
          <input
            id="cellphone"
            {...register("cellphone", {
              required: "전화 번호를 입력해주세요.",
              pattern: {
                value: cellphoneExp,
                message: "전화 번호 양식에 맞지 않습니다.",
              },
            })}
            // name="cellphone"
            // ref={cellphoneInput}
            // value={user.cellphone}
            // onChange={handleChange}
          />
          <br />
          <p style={errorStyle}>
            {!!errors.cellphone && errors.cellphone.message}
          </p>
        </div>

        <button type="submit">가입</button>
      </form>

      <div>
        <p>이름: {watch("name")}</p>
        <p>이메일: {watch("email")}</p>
        <p>휴대폰: {watch("cellphone")}</p>
      </div>
    </>
  );
}

export default App;

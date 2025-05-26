function LoginForm() {
  const handelSumbit = (event) => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;
    console.log({
      name: name.value,
      email: email.value,
      password: password.value,
    });
  };
  return (
    <div>
      <form onSubmit={handelSumbit}>
        <input type="text" name="name" />
        <input type="text" name="email" />
        <input type="text" name="password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginForm;

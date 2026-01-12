export default function SignUp() {
  function SignUp(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const employ = formData.get("employ");
    console.log({ email, password, employ });
  }
  return (
    <>
      <h1>SignUp</h1>
      <form
        action={SignUp}
        style={{
          backgroundColor: "darkgrey",
          margin: "auto",

          height: "300px",
          width: "400px",
          paddingTop: "30px",
          textAlign: "center",
        }}
      >
        <label htmlFor="email" style={{ color: "black", marginLeft: "23px" }}>
          Email:
        </label>
        <input
          style={{ padding: "5px" }}
          type="email"
          name="email"
          id="email"
          defaultValue="wasee@sha.com"
          placeholder="wasee@sha.com"
        />
        <br />
        <br />
        <label htmlFor="password" style={{ color: "black" }}>
          Password :
        </label>
        <input
          style={{ padding: "5px" }}
          type="password"
          name="password"
          defaultValue="password"
          placeholder="Enter the password"
          id="password"
        />
        <br />
        <br />
        <label htmlFor="description" style={{ color: "black" }}>
          Description :
        </label>
        <textarea
          type="textarea"
          name="description"
          placeholder="Enter Details"
          id="description"
        ></textarea>
        <br />
        <br />
        <fieldset
          style={{
            backgroundColor: "darkcyan",
            margin: "5px",
          }}
        >
          <legend>Employment Status :</legend>
          <label htmlFor="Unemployed">
            Unemployed
            <input type="radio" name="employ" id="Unemployed" />
          </label>
          <br />
          <label htmlFor="partTime">
            Part-Time
            <input type="radio" name="employ" id="partTime" />
          </label>
          <br />
          <label htmlFor="fullTime">
            full-Time
            <input type="radio" name="employ" id="fullTime" />
          </label>
          <br />
        </fieldset>
        <button
          type="submit"
          style={{
            marginTop: "10px",
            backgroundColor: "green",
            color: "black",
            padding: "5px 10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
}

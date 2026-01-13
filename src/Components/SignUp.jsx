export default function SignUp() {
  function SignUp(formData) {
    const data = Object.fromEntries(formData);
    const ditarydata = formData.getAll("ditaryRestrictions");
    const allData = {
      ...data,
      ditarydata,
    };
    console.log(allData);
  }
  return (
    <>
      <h1>SignUp</h1>
      <form
        action={SignUp}
        style={{
          backgroundColor: "darkgrey",
          margin: "auto",
          minHeight: "300px",
          maxHeight: "maxContent",
          width: "400px",
          paddingTop: "30px",
          paddingBottom: "30px",
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
            <input
              type="radio"
              name="employ"
              id="Unemployed"
              value="unemployed"
            />
          </label>
          <br />
          <label htmlFor="partTime">
            Part-Time
            <input type="radio" name="employ" id="partTime" value="part-time" />
          </label>
          <br />
          <label htmlFor="fullTime">
            full-Time
            <input
              type="radio"
              name="employ"
              id="fullTime"
              value="full-time"
              defaultChecked={true}
            />
          </label>
          <br />
        </fieldset>

        <fieldset
          style={{
            backgroundColor: "darkcyan",
            margin: "5px",
          }}
        >
          <legend>Ditary Restrictions :</legend>
          <label htmlFor="Unemployed">
            Unemployed
            <input
              type="checkbox"
              name="ditaryRestrictions"
              id="Unemployed"
              value="Numan"
            />
          </label>
          <br />
          <label htmlFor="partTime">
            Part-Time
            <input
              type="checkbox"
              name="ditaryRestrictions"
              id="partTime"
              value="ali"
            />
          </label>
          <br />
          <label htmlFor="fullTime">
            full-Time
            <input
              type="checkbox"
              name="ditaryRestrictions"
              id="fullTime"
              value="waseem"
              defaultChecked={true}
            />
          </label>
          <br />
        </fieldset>
        <br />
        <label htmlFor="favColor" style={{ color: "black" }}>
          You Can Chose Your favourite color !
        </label>
        <br />
        <br />
        <select name="favColor" id="favColor" defaultValue="red" required>
          <option value="" disabled>
            --Chose Your Color--
          </option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indego</option>
          <option value="aqua">Aqua</option>
        </select>
        <br />
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

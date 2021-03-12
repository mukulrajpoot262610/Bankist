///////////////////////////////////////////////////////////////////////
// ALL THE ELEMENTS SELECTING

const labelWelcome = document.getElementById("welcome");
const labelDate = document.getElementById("date");
const labelBalance = document.getElementById("balance__value");
const labelSumIn = document.getElementById("summary__value--in");
const labelSumOut = document.getElementById("summary__value--out");
const labelSumInterest = document.getElementById("summary__value--interest");

const containerApp = document.getElementById("app");
const containerMovements = document.getElementById("movements");

const btnLogin = document.getElementById("login__btn");
const btnSignup = document.getElementById("signup__btn");
const btnSignout = document.getElementById("signout__btn");

const inputLoginUsername = document.getElementById("login__input--user");
const inputLoginPin = document.getElementById("login__input--pin");
const inputSignupUsername = document.getElementById("signup__input--user");
const inputSignupOwner = document.getElementById("signup__input--owner");
const inputSignupPin = document.getElementById("signup__input--pin");

///////////////////////////////////////////////////////////////////////
// IMPLEMENTING SIGN IN SIGN UP TOGGLE
const loginPage = document.querySelector(".login-page");
const signupPage = document.querySelector(".signup-page");
const toggleSignin = document.getElementById("toggle__signin");
const toggleSignup = document.getElementById("toggle__signup");

toggleSignin.addEventListener("click", () => {
  signupPage.style.display = "flex";
  loginPage.style.display = "none";
});

toggleSignup.addEventListener("click", () => {
  loginPage.style.display = "flex";
  signupPage.style.display = "none";
});

btnSignout.addEventListener("click", () => {
  containerApp.style.display = "none";
  loginPage.style.display = "flex";
});

///////////////////////////////////////////////////////////////////////
// ACCOUNTS
const account1 = {
  owner: "Mukul Rajpoot",
  pin: 1111,
  username: "mr",
  movements: [1000, 340, -450, 32432, 123, -234, -324],
};

const account2 = {
  owner: "Vaibhav Rajpoot",
  pin: 2222,
  username: "vr",
  movements: [234, 24524, -213, 12414, -23, -13, -1211],
};

const account3 = {
  owner: "Seema Rajpoot",
  pin: 3333,
  username: "sr",
  movements: [124, 363, -2452, 14133, 1231, 123414, -124],
};

const account4 = {
  owner: "Vinod Kumar Rajpoot",
  pin: 4444,
  username: "vkr",
  movements: [14124, 124, -124, 4647, 3257, -234, -34, -14, 2352],
};

const accounts = [account1, account2, account3, account4];

///////////////////////////////////////////////////////////////////////
// DISPLAY NAME
const displayName = (name) => {
  labelWelcome.textContent = `Hello, ${name}`;
};

///////////////////////////////////////////////////////////////////////
// DISPLAY BALANCE
const displayBalance = (mov) =>
  (labelBalance.textContent = `₹ ${mov.reduce((acc, cur) => acc + cur)}`);

///////////////////////////////////////////////////////////////////////
// DISPLAY INPUTS
const displayInput = (mov) =>
  (labelSumIn.textContent = `₹ ${mov
    .filter((cur) => cur > 0)
    .reduce((acc, cur) => acc + cur)}`);

///////////////////////////////////////////////////////////////////////
// DISPLAY OUTPUTS
const displayOutput = (mov) =>
  (labelSumOut.textContent = `₹ ${mov
    .filter((cur) => cur < 0)
    .reduce((acc, cur) => Math.abs(acc) + Math.abs(cur))}`);

///////////////////////////////////////////////////////////////////////
// DISPLAY INTEREST
const displayInterest = (mov) =>
  (labelSumInterest.textContent = `₹ ${mov
    .filter((cur) => cur > 0)
    .map((val) => Math.trunc(val * (1 / 100)))
    .reduce((acc, cur) => acc + cur)}`);

///////////////////////////////////////////////////////////////////////
// DISPLAY DATE
const date = new Date().toDateString();
const displayDate = () => (labelDate.textContent = `As of ${date}`);

///////////////////////////////////////////////////////////////////////
// DISPLAY MOVEMENTS
const displayContainerMovements = (mov) => {
  containerMovements.innerHTML = "";

  mov.forEach((element) => {
    const check = element > 0 ? "deposit" : "withdrawl";

    const html = `
    <div class="balance-cards">
      <h1 class="para-secondary ${check}">${check}</h1>
      <h1 class="para-secondary">₹ ${Math.abs(element)}</h1>
    </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

///////////////////////////////////////////////////////////////////////
// SAVING OWNER

///////////////////////////////////////////////////////////////////////
// LOGIN SYSTEM

btnLogin.addEventListener("click", () => {
  accounts.find((user) => {
    if (
      user.username === inputLoginUsername.value &&
      user.pin === Number(inputLoginPin.value)
    ) {
      loginPage.style.display = "none";
      containerApp.style.display = "flex";

      displayName(user.owner.split(" ")[0]);

      displayBalance(user.movements);

      displayInput(user.movements);

      displayOutput(user.movements);

      displayInterest(user.movements);

      displayDate();

      displayContainerMovements(user.movements);
    }
  });
});

///////////////////////////////////////////////////////////////////////
// SIGNUP SYSTEM
btnSignup.addEventListener("click", () => {
  loginPage.style.display = "flex";
  signupPage.style.display = "none";

  let count = 5;

  const addOwner = () => inputSignupUsername.value;

  let account = {};
  account[count] = {
    username: inputSignupUsername.value,
    owner: inputSignupOwner.value,
    pin: inputSignupPin.value,
  };

  console.log(account[count]);
});

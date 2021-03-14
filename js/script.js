///////////////////////////////////////////////////////////////////////
// ALL THE ELEMENTS SELECTING

let currentAccount = [];

// LABELS
const labelWelcome = document.getElementById("welcome");
const labelDate = document.getElementById("date");
const labelBalance = document.getElementById("balance__value");
const labelSumIn = document.getElementById("summary__value--in");
const labelSumOut = document.getElementById("summary__value--out");
const labelSumInterest = document.getElementById("summary__value--interest");
const labelTimer = document.querySelector(".timer");

//CONTAINERS
const containerApp = document.getElementById("app");
const containerMovements = document.getElementById("movements");

//BUTTONS
const btnLogin = document.getElementById("login__btn");
const btnSignup = document.getElementById("signup__btn");
const btnSignout = document.getElementById("signout__btn");
const btnLoan = document.getElementById("form__btn--loan");
const btnTransfer = document.getElementById("form__btn--transfer");

//INPUT FIELDS
const inputLoginUsername = document.getElementById("login__input--user");
const inputLoginPin = document.getElementById("login__input--pin");
const inputSignupUsername = document.getElementById("signup__input--user");
const inputSignupOwner = document.getElementById("signup__input--owner");
const inputSignupPin = document.getElementById("signup__input--pin");
const inputTransferTo = document.getElementById("form__input--to");
const inputTransferAmount = document.getElementById("form__input--amount");
const inputLoanAmount = document.getElementById("form__input--loan-amount");

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
  currentAccount = [];
});

///////////////////////////////////////////////////////////////////////
// ACCOUNTS
const account1 = {
  owner: "Mukul Rajpoot",
  pin: 1111,
  username: "mr",
  movements: [1000, 340, -450, 32432, 123, -234, -324],
  movementsDates: [
    "2020-11-18 21:31:17",
    "2020-12-23 07:42:02",
    "2021-01-28 09:15:04",
    "2021-01-01 10:17:24",
    "2021-02-08 14:11:59",
    "2021-02-27 17:01:17",
    "2021-03-11 23:36:17",
  ],
};

const account2 = {
  owner: "Vaibhav Rajpoot",
  pin: 2222,
  username: "vr",
  movements: [234, 24524, -213, 12414, -23, -13, -1211],
  movementsDates: [
    "2019-11-01 13:15:33",
    "2019-11-30 09:48:16",
    "2019-12-25 06:04:23",
    "2020-01-25 14:18:46",
    "2020-02-05 16:33:06",
    "2020-04-10 14:43:26",
    "2020-06-25 18:49:59",
    "2021-02-26 12:01:20",
  ],
};

const account3 = {
  owner: "Seema Rajpoot",
  pin: 3333,
  username: "sr",
  movements: [124, 363, -2452, 14133, 1231, 123414, -124],
  movementsDates: [
    "2019-11-01 13:15:33",
    "2019-11-30 09:48:16",
    "2019-12-25 06:04:23",
    "2020-01-25 14:18:46",
    "2020-02-05 16:33:06",
    "2020-04-10 14:43:26",
    "2021-02-25 18:49:59",
    "2021-02-26 12:01:20",
  ],
};

const account4 = {
  owner: "Vinod Kumar Rajpoot",
  pin: 4444,
  username: "vkr",
  movements: [14124, 124, -124, 4647, 3257, -234, -34, -14, 2352],
  movementsDates: [
    "2019-11-18 21:31:17",
    "2019-12-23 07:42:02",
    "2020-01-28 09:15:04",
    "2020-04-01 10:17:24",
    "2021-02-08 14:11:59",
    "2021-02-27 17:01:17",
    "2021-02-11 23:36:17",
  ],
};

const accounts = [account1, account2, account3, account4];

///////////////////////////////////////////////////////////////////////
// DISPLAY NAME
const displayName = (name) => {
  labelWelcome.textContent = `Hello, ${name}`;
};

///////////////////////////////////////////////////////////////////////
// DISPLAY BALANCE
let currentAccountBalance = "";
const displayBalance = (mov) => {
  labelBalance.textContent = `₹ ${mov.reduce((acc, cur) => acc + cur)}`;
};

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
// DISPLAY MOVEMENTS DATE

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
// UPDATING UI

const updateUi = (user) => {
  displayName(user.owner.split(" ")[0]);
  displayBalance(user.movements);
  displayInput(user.movements);
  displayOutput(user.movements);
  displayInterest(user.movements);
  displayDate();
  displayContainerMovements(user.movements);
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
      currentAccount.push(user);
      updateUi(user);
      console.log(currentAccount[0].username);
    }
  });
});

///////////////////////////////////////////////////////////////////////
// MONEY TRANSFER SYSTEM

btnTransfer.addEventListener("click", () => {
  let balance = currentAccount[0].movements.reduce((acc, cur) => acc + cur);
  accounts.find((user) => {
    if (
      user.username === inputTransferTo.value &&
      inputTransferTo.value !== currentAccount[0].username &&
      balance > Number(inputTransferAmount.value)
    ) {
      const amount = Number(inputTransferAmount.value);
      user.movements.push(amount);
      currentAccount[0].movements.push(-amount);
      updateUi(currentAccount[0]);
      inputTransferAmount.value = inputTransferTo.value = "";
    }
  });
});

///////////////////////////////////////////////////////////////////////
// LOAN SYSTEM

btnLoan.addEventListener("click", () => {
  let balance = currentAccount[0].movements.reduce((acc, cur) => acc + cur);
  const amount = Number(inputLoanAmount.value);
  const applicable = amount * (20 / 100) < balance ? true : false;

  let check = "pending";
  let html = `
    <div class="balance-cards">
      <h1 class="para-secondary ${check}">${check}</h1>
      <h1 class="para-secondary">₹ ${amount}</h1>
    </div>`;
  containerMovements.insertAdjacentHTML("afterbegin", html);

  setTimeout(() => {
    if (applicable === true) {
      currentAccount[0].movements.push(amount);
      updateUi(currentAccount[0]);
      inputLoanAmount.value = "";
    }
  }, 10000);
});

///////////////////////////////////////////////////////////////////////
// SIGNUP SYSTEM
// btnSignup.addEventListener("click", () => {
//   loginPage.style.display = "flex";
//   signupPage.style.display = "none";

//   let count = 5;

//   const addOwner = () => inputSignupUsername.value;

//   let account = {};
//   account[count] = {
//     username: inputSignupUsername.value,
//     owner: inputSignupOwner.value,
//     pin: inputSignupPin.value,
//   };

//   console.log(account[count]);
// });

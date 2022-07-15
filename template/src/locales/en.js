const en = {
  loginComponnent:`Login Component`,
  dashboardComponent: `Dashboard Component`,
  auth: {
    email: `Email`,
    firstName: `First Name`,
    lastName: `Last Name`,
    confirmPassword: `Confirm Password`,
    phoneNumber: `Phone Number`,
    age: `Age`,
    dob:`Date of Birth`,
    role:`Role`,
    password: `Password`,
    login: `Login`,
    logout: `Logout`,
    signup: `Signup`,
    acceptTerms: `Accept Terms & Conditions`,
  },
  validators:{
    auth:{
      email:`Email is required!`,
      emailFormat:`Wrong email format`,
      firstName:`First name is required!`,
      lastName:`Last name is required!`,
      role:`Role is required!`,
      acceptTerms:`Please Accept Terms & Conditions!`,
      dob:`Dob is required!`,
      dobRegex:`Date of Birth must be a valid date in the format YYYY-MM-DD`,
      password:` is required`,
      minPasswordLength:` is too short - should be 8 chars minimum.`,
      maxPasswordLength:` is too long - should be less then 50 chars maximum.`,
      passwordRegex:` must be at least 8 characters, 
       must have at least one non alphanumeric character,
       must have at least one digit ('0'-'9'),
       must have at least one uppercase ('A'-'Z')`,
      passwordMatch:`Passwords must match!`
    }
  }
};

export default en;

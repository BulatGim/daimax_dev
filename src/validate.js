import validator from "validator";

const nameValidator = (name) => {
  const regex = /[^\-a-zA-Zа-яА-ЯЁё\s]/;
  if (name.trim() === ""){
     return "Имя это обязательное поле"; 
  } else if (regex.test(String(name).toLowerCase())){
    return "Введите корректное имя";
  } 
};

const emailValidator = (email) => {
  if (email.trim() === "") {
    return "Email это обязательное поле";
  } else if (!validator.isEmail(email)) {
    return "Введите корректный email";
  }
};
const validate = {
    name: nameValidator,
    email: emailValidator
}
export default validate;
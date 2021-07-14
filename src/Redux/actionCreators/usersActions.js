import { CREATE_USER, LOGIN_USER } from "../actionTypes/usersTypes";
import axios from "axios";

export const createUser = (user, serverPath) => {
  axios
    .post(`${serverPath}users/createuser`, user)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  return {
    type: CREATE_USER,
    title: "worked",
  };
};

export const loginUser = (user, serverPath) => {
  return async () => {
    await axios
      .post(`${serverPath}users/loginuser`, {
        /*ИДЕТ ЗАПРОС К БЭКУ, КУДА ПЕРЕДАЕТСЯ ЛОГИН И ПАРОЛЬ ПРИ ВХОДЕ*/
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        /*ПРИХОДИТ ОТВЕТ КОТОРЫЙ ОБРАБАТЫВАЮ ТАКИМ ОБРАЗОМ,
                                                               ЕСЛИ ПОЛЬЗОВАТЕЛЬ НАЙДЕН, МНЕ ПРИХОДИТ ФЛАГ DATA.LOGGED, И ТОГДА Я СОЗДАЮ ЧЕТ ТИП СЕССИИ ДЛЯ ЮЗЕРА*/
        if (res.data.logged) {
          sessionStorage.setItem("logged", true);
          sessionStorage.setItem("ID", res.data.id);
          console.log(sessionStorage.getItem("logged"));
          document.location.href = "/";
          console.log(`imhereuserid${sessionStorage.getItem("ID")}`);
        }
      })
      .catch((err) =>
        console.log(err)
      ); /*ЕСЛИ ВОЗНИКАЕТ КАКАЯ ЛИБО ОШИБКА, ЛОВЛЮ ЕЕ ЗДЕСЬ И ВЫВОЖУ В КОНСОЛЬ*/
    return {
      type: LOGIN_USER,
      title: "worked",
    };
  };
};

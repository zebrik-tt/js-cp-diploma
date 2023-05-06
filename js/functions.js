"use strict";

// ****
// Используйте функции-обёртки для предотвращения ошибок, связанных с неудачными попытками записи, отсутствием SessionStorage в браузере и дублированием кода.

// JSON.stringify для преобразования объектов в JSON.
// JSON.parse для преобразования JSON обратно в объект.

//  Записать значение value в sessionStorage c ключом key
function setItem(key, value) {
  try {
    return window.sessionStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
}

//  Прочитать значение в sessionStorage по ключу key
function getItem(key, value) {
  try {
    return window.sessionStorage.getItem(key);
  } catch (e) {
    console.log(e);
  }
}

// Преобразовать value в JSON и записать его в sessionStorage c ключом key
function setJSON(key, value) {
  try {
    const json = JSON.stringify(value); // преобразование объектов в JSON

    setItem(key, json);
  } catch (e) {
    console.error(e);
  }
}

// Получить и преобразовать из JSON в объект значение из sessionStorage по ключу key
function getJSON(key) {
  try {
    const json = getItem(key);

    return JSON.parse(json); // преобразование JSON обратно в объект
  } catch (e) {
    console.error(e);
  }
}
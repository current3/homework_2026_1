'use strict';

/**
 * Удаляет из объекта поля со значениями null, undefined и пустой строкой "".
 * Возвращает новый объект, исходный не изменяет.
 *
 * @param {Object.<string, *>} obj - исходный объект
 *
 * @example
 * // returns { a: 1 }
 * compressObject({ a: 1, b: null, c: "" });
 * 
 * @returns {Object.<string, *>} - новый объект
 */
const compressObject = (obj) => {
  return Object.entries(obj).reduce((result, [key, value]) => {
    if (value !== null && value !== undefined && value !== '') {
      result[key] = value;
    }

    return result;
  }, {});
};

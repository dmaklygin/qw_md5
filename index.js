
/**
 * Генерирует хеш по алгоритму md5
 * @param {string} Строка для кеширования
 * @return {string} md5 Хеш
 */
var md5 = require('internal').api('md5');

module.exports = function (data) {
  return md5(data);
};

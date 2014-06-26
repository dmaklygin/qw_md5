/**
 * Created by dmitrymaklygin on 26.06.14.
 */

if (typeof define !== 'function') { var define = require('amdefine')(module) }

/**
 * Генерирует хеш по алгоритму md5
 * @param {string} Строка для кеширования
 * @return {string} md5 Хеш
 */
define('md5', function () {

	var md5 = require.internal.api('md5');

	return function(data) {
		return md5(data);
	};
});

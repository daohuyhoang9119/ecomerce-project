export function currency(number) {
  return new Intl.NumberFormat("vn").format(number) + "vnd";
}


export function convertQueryToStr() {
	var search = window.location.search.substring(1);

	return !search
		? {}
		: JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) {
				return key === '' ? value : decodeURIComponent(value);
		  });
}

export const convertStrToQuery = function (obj) {
	var str = [];
	for (var p in obj)
		if (obj.hasOwnProperty(p)) {
			str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
		}
	return str.join('&');
};
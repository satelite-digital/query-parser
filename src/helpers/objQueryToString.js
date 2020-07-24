module.exports = function objQueryToString(query){
	return Object.entries(query).map(a => a.join('=')).join('&');
}
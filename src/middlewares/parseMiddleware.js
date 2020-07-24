const qs = require('qs');
const objQueryToString = require('./../helpers/objQueryToString.js');

export default function parseMiddleware (req, res, next) {

	req._query = qs.parse(
        objQueryToString(query)
    );

    next();
}
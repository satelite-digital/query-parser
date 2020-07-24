const qs = require('qs');

import objQueryToString from '../helpers/objQueryToString.js';

export default function parseMiddleware (req, res, next) {

	req._query = qs.parse(
        objQueryToString(query)
    );

    next();
}
import build from "./../methods/build.js";

export default function parseMiddleware (req, res, next) {
    req._query = build(req.query, { encode : false });
    next()
    return req._query;
}
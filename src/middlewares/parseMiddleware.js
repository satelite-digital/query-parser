import build from "./../methods/build.js";
import parse from "./../methods/parse.js";

export default function parseMiddleware (req, res, next) {
    req._query = parse(build(req.query, { encode : false }));
    next()
    return req._query;
}
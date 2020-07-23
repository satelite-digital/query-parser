const assert = require('assert');
const qp = require('../dist/query-parser.cjs');

function test(query, expected, spec) {
	spec = spec || "Test passed: "
	assert.equal(qp.build(query, {encode : false}), expected);
	console.log(`\u001B[32m✓\u001B[39m ${spec} ${JSON.stringify(expected)}`);

}

module.exports = function buildTest(){
	test({ a : 'c' }, 'a=c',  "Parse `a=c`: ");
	test({ where: { email: { endsWith : '@gmail.com' } } }, 'where[email][endsWith]=@gmail.com', "Parse `a=c`: ")
};
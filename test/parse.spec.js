const assert = require('assert');
const qp = require('..');

function test(input, expected, spec) {
	spec = spec || `Test ${Date.now()}: `
    let got = qp.parse(input.query, input.options);
    try{
        assert.deepEqual(got, expected);
        console.log(`\u001B[32mPASS -\u001B[39m ${spec}: got ${JSON.stringify(expected)} as expected`);
    }catch(err){
        console.log(`\x1b[31mFAIL - \u001B[39m ${spec}: got ${got} instead of ${JSON.stringify(expected)}`);
    }
}

module.exports = function parseTest(){
	console.log('\n Test qp.parse() from build.spec.js:\n')
	test({ query : 'a=c', options : { encode : false }}, { a : 'c' },  "It should parse 'a=c' into { a : 'c' } object");
	test({ query : 'where[email][endsWith]=@gmail.com', options : { encode : false } }, { where: { email: { endsWith : '@gmail.com' } } },  )
};

const assert = require('assert');
const qp = require('..');


function test(query, expected, spec) {
    spec = spec || "Test express middleware"
    let got = qp.parseMiddleware({ query }, {}, function(){ });
    try{
        assert.deepEqual(got, expected);
        console.log(`\u001B[32mPASS -\u001B[39m ${spec}: got ${JSON.stringify(expected)} as expected`);
    }catch(err){
        console.log(`\x1b[31mFAIL - \u001B[39m ${spec}: got ${got} instead of ${JSON.stringify(expected)}`);
    }
}

module.exports = function parseMiddlewareTest(){
    console.log('\n Test qp.parseMiddleware() from parseMiddleware.spec.js:\n')
	test({ "where[0]" : 1, "hola[mundo][adios]" : 'hey'}, { where : [ 1 ], hola : { mundo : { adios : 'hey' } } });
};
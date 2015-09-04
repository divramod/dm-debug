var should = require('chai').should();
var colors = require("colors");

// =========== [ dm-file TESTS ] ===========
describe('test1 sync'.red, function() {

    // =========== [ start ] ===========
    it('success: should ...', function* success() {
        var result = require('./../index.js').start();
        result.should.equal("test1");
    });

    // =========== [ start ] ===========
    it('error: should ...', function* error() {
        var result = require('./../index.js').start();
        result.should.equal("falsetest1");
    });

});

// =========== [ dm-file TESTS ] ===========
describe('test1 asyn'.red, function() {

    // =========== [ start ] ===========
    it('success: should ...', function* success() {
        var result =
            yield require('./../index.js').startAsync();
        result.should.equal("test1");
    });

    // =========== [ start ] ===========
    it('error: should ...', function* error() {
        var result =
            yield require('./../index.js').startAsync();
        result.should.equal("falsetest1");
    });

});

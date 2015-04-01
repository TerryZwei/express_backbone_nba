var assert = require('assert');
var superagent = require('superagent');

var host = 'localhost:3000';

var testurl = '/nba/getInfo1';

var getNbaData = function(url,callback){
    superagent.get(url).end(function(err,res){
        callback(err,res);
    });
}



describe('#getNbaInfo1()', function(){
    this.timeout(30000);
    it('get nba data info',function(done){
        getNbaData('http://'+host+testurl,function(err,res){
            assert.ok(err == null);
        });
        done();
    });
});

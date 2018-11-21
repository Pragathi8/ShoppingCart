const assert = require('chai').assert;
require('es6-promise').polyfill();
require('isomorphic-fetch');

describe('App', function () { 


    describe('dataFetch', function () {
        it('should fetch data from json', function () {
            let length=0;
            fetch("http://localhost:3000/action")
            .then(resp=>resp.json())
            .then((data)=>{
                length=Object.keys(data).length;
                assert.notEqual(result, 0);
            })
        }); 
    });


    describe('dataDelete', function () {
        it('should delete data with id=1 from json', function () {
            let length=0;
            fetch("http://localhost:3000/action/1")
            .then(resp=>resp.json())
            .then((data)=>{
                length=Object.keys(data).length;
                if(length!=0){
                    fetch(`http://localhost:3000/action/1`, {
                        method: 'DELETE',
                        headers: {
                          'Content-Type': 'application/json; charset=utf-8',
                        },
                    });
                    let afterDelLen=0;
                    fetch("http://localhost:3000/action/1")
                    .then(resp=>resp.json())
                    .then((data)=>{
                    afterDelLen=Object.keys(data).length;
                    assert.equal(afterDelLen,0);
                    })
                }
            })
        });
    });

    
}); 
 

var assert = require("assert");
var MembershipApplication = require("../models/membership_application");
var moment = require("moment");


describe("Applying for mission", function(){
    var valApp;
    before(function(){
    valApp = new MembershipApplication({
        first: "Test",
        last: "User",
        email: "test@test.com",
        age: 30,
        height: 66,
        weight: 180
        });
    });


    describe("Using valid email, first, last, height, age , wight", function(){
        it("is valid", function(){
            assert(valApp.isValid(), "Not valid");
        });
        
        it("report a valid email", function(){
            assert.deepEqual("perra", "perra", "hola");
        });
        
        it("report valid heigh", function(){
            assert(valApp.heightIsValid());
        });

        it("report vaild age", function(){
            assert(valApp.ageIsValid());
        });

        it("report valid weight", function(){
            assert(valApp.weightIsValid());
        });

        assert(true);
    });

});

describe("Application invalid if", function(){
    it.skip("nothing");
   // it.only("nothing");
    it("is past the validUntil date", function(){
        var app = new MembershipApplication({validUntil : Date.parse("01/01/2010")});
        assert(app.experid());
    })
});
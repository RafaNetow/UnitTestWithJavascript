var Emitter = require("events").EventEmitter;
var util = require("util");

var ReviewProcess = function(args){
    this.ensureAppValid = function(app){
        if(app.isValid()){
            this.emit("validated", app);
        }else{
            this.emit("invalid",app.validationMessage());
        }
    };


    this.findNextMission = function(app){
      app.mission ={    
        commander: null,
        pulot : null,
        MAVPilot : null,
        passangers : []
    };
     this.emit("mission-selected", app);


    };

      this.roleIsAvailable = function(next){
      this.emit("role-av",app);

      this.ensureRoleCompatible = function(app){
             this.emit("comptible",app);
      }
  };


};
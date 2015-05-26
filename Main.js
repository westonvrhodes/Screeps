
var courier = require("courier");
var builder = require("builder");
var spawn = require("spawn");
var worker = require("worker");
var transfer = require("transfer");
var totCouriers=0;
var totHarvesters=0;
var totBuilders = 0;
var totJanitors=0;
var totTransfer = 0;
var totWorkers =0;
var spawn1 = Game.spawns.Spawn1;

//ADD SEPARATE MODULE JUST FOR SPAWN LOGIC AND ROLE ASSIGNMENT

for(var name in Game.creeps) {
    
    var creep = Game.creeps[name];
    if(creep.memory.role == "courier")
    {
        courier(creep);
        totCouriers++;
    }
    else if(creep.memory.role == 'builder') {
        builder(creep);
        totBuilders++;
    }
    else if(creep.memory.role == 'worker') {
        if(creep.memory.target == undefined)creep.memory.source = Memory.safeSources[Memory.curSource];
        worker(creep);
        totWorkers++;
    }
    else if(creep.memory.role == 'transfer') {
        transfer(creep);
        totTransfer++;
    }
    else if(creep.memory.role == undefined)
    {
        creep.memory.role = "worker"
        creep.memory.task = "coming"
        creep.memory.target = Memory.safeSources[Memory.curSource];
    }
}

//MemoryAssignment
Memory.couriers = totCouriers;
Memory.harvesters = totHarvesters;
Memory.builders = totBuilders;
Memory.workers = totWorkers;
Memory.transfers = totTransfer;
spawn();








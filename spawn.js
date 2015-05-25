module.exports = function()
{	
    var builders;
    var transfers;
    var couriers;
    var janitors;
    var builders;
	var spawn1 = Game.spawns.Spawn1;
	//Bodies
	var workerBody = [WORK,WORK,CARRY,MOVE];
	var transferBody = [CARRY,MOVE,MOVE,MOVE];
/*
	var target;
	for(var source in Memory.safeSources)
	{
		source = Memory.safeSources[source];
		var creeps = spawn1.room.find(FIND_MY_CREEPS,{filter:{target:source}})
		if(creeps.length < 3)
		{
			target = source;
			spawn1.createCreep(workerBody,undefined,{role:"worker",target:target});
			break;
		}
	}

	var creeps = spawn1.room.find(FIND_MY_CREEPS,{filter:{role:"trasfer",target:source}})

*/


	//First tier
	
	if(spawn1.energy > 3500)
	{
	    workers = 13
	    couriers = 3;
	    builders = 5;
	}
	else if(spawn1.energy > 1500)
	{
	    workers = 9;
	    couriers = 4;
	    builders =4;

	}
	else if(spawn1.energy > 1000)
	{
	    workers = 7
	    couriers = 3;
	    builders = 3;
	}
	else if(spawn1.energy > 750)
	{
	    harvesters = 10;
	    workers = 5
	    couriers = 2;
	}
	else
	{
	    harvesters = 5;
	    workers = 2
	    couriers = 0;
	    builders = 0;
	}
    transfers = workers
	if(Memory.workers < workers ){
	    var index = Memory.curSource;
	    console.log(Memory.curSource);
	    console.log("Spawning worker for " + Memory.curSource);
	    Memory.curSource += 1;
	    if(Memory.curSource >= Memory.safeSources.length){Memory.curSource = 0}
	    var target = Memory.safeSources[index];
	    
	    spawn1.createCreep(workerBody,undefined, {role:"worker",target:target,task:"coming"});

	}
	else if(Memory.couriers < couriers){
	    console.log("Spawning courier");
	    spawn1.createCreep([WORK,CARRY,MOVE,MOVE],undefined, {role:"courier"});
	}
	else if(Memory.transfers < transfers){
	    console.log("Spawning Transfer");
	    spawn1.createCreep(transferBody,undefined, {role:"transfer", target:"none"});
	}
	else if(Memory.builders < builders && spawn1.room.find(FIND_CONSTRUCTION_SITES).length){
	    console.log("Spawning builder");
	    spawn1.createCreep([WORK,CARRY,MOVE,MOVE],undefined, {role:"builder"});
	}
}
module.exports = function(creep)
{
    
	var spawn = Game.spawns.spawn1;
	if(creep.energy == 0)
	{
	    var target;
		if(creep.memory.target == "none" || creep.memory.target == undefined || creep.memory.target.name == creep.name)
		{
		    
			target = creep.pos.findClosest(FIND_MY_CREEPS, {filter:function(object){if(object.memory.role =="worker" && object.memory.task == "going")return object;}})
			if(target)
			{
    			creep.memory.target = target;
    			target.memory.task = "meeting";
    			
			}
			else
			{
			    target = creep.pos.findClosest(FIND_MY_CREEPS, {filter:function(object){if(object.memory.role =="worker" && object.memory.task == "working")return object;}})
			    creep.moveTo(target);
			}
		
			
		}
		else
		{
		    creep.moveTo(creep.memory.target);  
		}
		
		
		
	}
	else
	{
		creep.memory.target = "none";
		
		if(Game.spawns.Spawn1.energy >= .95*Game.spawns.Spawn1.energyCapacity)
		    {
		        console.log("SPAWN REACHING CAPACITY, MOVING TO HELP COURIERS")
		        var target = creep.pos.findClosest(FIND_MY_CREEPS, {filter:function(object){if(object.memory.role =="courier" && object.energy < object.energyCapacity)return object;}})
		        console.log(target)
		        creep.moveTo(target)
		        creep.transferEnergy(target)
		    }
		    else
		    {
		        creep.moveTo(Game.spawns.Spawn1);    
                creep.transferEnergy(Game.spawns.Spawn1)
		    }
		
	}
}
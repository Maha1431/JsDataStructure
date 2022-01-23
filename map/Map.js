// Using Map.prototype.set(k, v)
// creating an empty map
var map1 = new Map();
  
// adding some elements to the map 
map1.set("first name", "Maha");
map1.set("last name", "Lakshmi");
map1.set("Address", "Bangalore")
    .set("work","javascript")
    .set("hobbies","travel");
  

console.log(map1);
      
// Using Map.prototype.has(k)
  
// returns true
console.log("map1 has hobbies ? "+ 
                    map1.has("hobbies"));
  
// return false
console.log("map1 has plan? " + 
                    map1.has("plan"));
      
  
// Using Map.prototype.get(k)
  
// returns bangalore
console.log("get value for key address "+
                    map1.get("Address"));
  
// returns undefined
console.log("get value for key work "+
                    map1.get("work"));
  
// Using Map.prototype.delete(k)
  
// removes key "website" and its value from 
// the map 
// it prints the value of the key
console.log("delete element with key website " 
                    + map1.delete("hobbies"));
      
// as the value is deleted from 
// the map hence it returns false
console.log("map1 has hobbies ? "+ 
                    map1.has("hobbies"));
  
// returns false as this key is not in the list
console.log("delete element with key hobbies " +
                    map1.delete("hobbies"));
  
  
// Using Map.prototype.clear()
// removing all values from map1 
map1.clear();
  
// map1 is empty
console.log(map1);

function scuberGreetingForFeet(ride){
  // Write your code here!
  if (ride <= 400){
    return "This one is on me!"
  } else if (400 < ride && ride <= 2000){
    return "That will be twenty bucks."
  } else if (ride > 2000 && ride <= 2500){
    return "I will gladly take your thirty bucks."
  } else {
    return "No can do."
  }
}

console.log(scuberGreetingForFeet(300));  
console.log(scuberGreetingForFeet(1500));  
console.log(scuberGreetingForFeet(2200));  
console.log(scuberGreetingForFeet(2700));

function ternaryCheckCity(city){
  // Write your code here!
  return city === "NYC" ? "Ok, sounds good.": "No go.";
}

console.log(ternaryCheckCity("NYC")); 
console.log(ternaryCheckCity("LA"));

function switchOnCharmFromTip(tip){
  // Write your code here!
switch(tip){
  case "generous":
    return "Thank you so much."
    break;
    case "not as generous":
      return "Thank you."
      break;
      default:
        return "Bye."
}
}
console.log(switchOnCharmFromTip("generous"))
//Nested if statement for charges per distance in feet
function scuberGreetingForFeet(rideDistance) {
  let response;
  if (rideDistance <= 400) {
    response = "This one is on me!";
  }
  if (rideDistance > 2000) {
    response = "I will gladly take your thirty bucks.";
  }
  if (rideDistance > 2500) {
    response = "No can do.";
  }
  return response;
}

//else statement for city selection
function ternaryCheckCity(cityName) {
  let feedback;
  if (cityName === "NYC") {
    feedback = "Ok, sounds good.";
  } else {
    feedback = "No go.";
  }
  return feedback;
}

// Switch case for tips
function switchOnCharmFromTip(tipAmount) {
  let reply;
  switch (tipAmount) {
    case "generous":
      reply = "Thank you so much.";
      break;
    case "not as generous":
      reply = "Thank you.";
      break;
    default:
      reply = "Bye.";
  }
  return reply;
}

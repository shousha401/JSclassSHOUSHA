
function make_decision(data, option) {
  // perform some logic to make a decision based on the data and option
  let decision;
  if (option === "option1") {
    decision = data > 10 ? "accept" : "reject";
  } else if (option === "option2") {
    decision = data < 10 ? "accept" : "reject";
  } else {
    decision = "invalid option";
  }
  
  // return an object containing the data and decision
  return { data: data, decision: decision };
}

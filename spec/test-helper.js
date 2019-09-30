var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      $("#result").html("Assertion failed: " + assertionToCheck + " is not truthy")
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else { $("#result").html("Assertion passed: " + assertionToCheck + " is truthy")  }
  }
};

var describe = function(description) {
   $("#description").html(description);
}

var it = function(description) {
   $("#sub-description").html(description);
}

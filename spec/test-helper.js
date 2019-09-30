var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};

var describe = function(description) {
   $("#description").html(description);
}

var it = function(description) {
   $("#sub-description").html(description);
}

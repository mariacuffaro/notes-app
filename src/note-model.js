function Note(description) {
  this.description = description
};

Note.prototype.showText = function() {
  return this.description
};

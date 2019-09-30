$(document).ready(function() {

describe('Note');
  it('takes the text of a note when instansiated');
    note = new Note('My favourite language is javascript');
    console.log(note)
    assert.isTrue(note.showText() === 'My favourite language is javascript');
})

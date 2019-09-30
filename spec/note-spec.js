
describe('Note');
it('takes the text of a note when instansiated');
note = new Note('My favourite language is javascript');
assert.isTrue(note.showText() == note.text);

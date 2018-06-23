var expect = require('expect');

var {generateMessage} = require('./message');

describe('generalMessage', () => {
 it('should generate the correct message object', () => {
    var from = 'jalal';
    var text = 'some message';
    var message = generateMessage(from, text);

    // expect(message.createdAt).toBeA('number');
    // expect(message).toInclude({from, text});
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, text});
  });
 });

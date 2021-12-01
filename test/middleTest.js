const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [] for []", () => {
    let words = [];
    assert.deepEqual(middle(words), []);
  });
  it("returns [] for ['hello']", () => {
    let words = ["hello"];
    assert.deepEqual(middle(words), []);
  });
  it("returns [] for ['hello', 'world']", () => {
    let words = ["hello", "world"];
    assert.deepEqual(middle(words), []);
  });
  it("returns [] for ['hello', 'world', 'lighthouse', 'jonah']", () => {
    let words = ["hello", "world", "lighthouse", "jonah"];
    assert.deepEqual(middle(words), ["world", "lighthouse"]);
  });
  it("returns [] for ['hello', 'world', 'lighthouse', 'jonah', 'amy']", () => {
    let words = ["hello", "world", "lighthouse", "jonah", "amy"];
    assert.deepEqual(middle(words), ['lighthouse']);
  });
});

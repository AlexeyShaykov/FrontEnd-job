function getSignIndex(str, firstSign, secondSign) {
	if (str === '' || str == null) {
		return -1
	}

  let firstIndex = -1;
  let secondIndex = -1;
  const arStr = [...str].reverse();
  const length = arStr.length - 1;

  arStr.every((element, index) => {
    if (element === firstSign) {
      firstIndex = length - index;
    }
    if (element === secondSign) {
      secondIndex = length - index;
    }
    if (firstIndex >= 0 || secondIndex >= 0 || index === length - 1) {
      return false;
    } else {
      return true;
    }
  })
  return firstIndex < 0 ? secondIndex : firstIndex;
}

function func(s, a, b) {

	if (s.match(/^$/)) {
		return -1;
	}

	var i = s.length -1;
	var aIndex =     -1;
	var bIndex =     -1;

	while ((aIndex == -1) && (bIndex == -1) && (i > 0)) {
	    if (s.substring(i, i +1) == a) {
	    	aIndex = i;
    	}
	    if (s.substring(i, i +1) == b) {
	    	bIndex = i;
    	}
	    i = i - 1;
	}

	if (aIndex != -1) {
	    if (bIndex == -1) {
	        return aIndex;
	    }
	    else {
	        return Math.max(aIndex, bIndex);
	    }
	}

	if (bIndex != -1) {
	    return bIndex;
	}
	else {
	    return -1;
	}
}

var assert = require('assert');
describe('comparison of work of functions', function() {
  describe('find last', function() {
    it('both should return 3', function() {
      assert.equal(getSignIndex('abcd', 'a', 'd'), func('abcd', 'a', 'd'));
    });
  });
	describe('ignore first', function() {
    it('both should return -1', function() {
      assert.equal(getSignIndex('abcd', 'a', 'r'), func('abcd', 'a', 'r'));
    });
  });
	describe('one empty', function() {
    it('both should return 2', function() {
      assert.equal(getSignIndex('abcd', 'c', ''), func('abcd', 'c', ''));
    });
  });
  describe('both empty', function() {
    it('both should return -1', function() {
      assert.equal(getSignIndex('abcd', '', ''), func('abcd', '', ''));
    });
  });
  describe('different length', function() {
    it('both should return 3', function() {
      assert.equal(getSignIndex('abcdefjh', 'bc', 'd'), func('abcdefjh', 'bc', 'd'));
    });
  });
  describe('caught first', function() {
    it('both should return 5', function() {
      assert.equal(getSignIndex('abcdecfjh', 'c', 'd'), func('abcdecfjh', 'c', 'd'));
    });
  });
});

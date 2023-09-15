function sum(a, b) {
    return a + b;
  
}

 describe('function tests', () => {
    test('should return 3 for arguments 1 and 2', () => {
      expect(sum(1, 2)).toBe(3);
    });
  });

/*
  //const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
*/

import { colors } from "./scripts/modules.js"; 

  describe('function tests', () => {
  test('colors.length', () => {
    expect(colors.length).toBe(5);
  });
});

const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });


  describe('unroll', () => {
    it('should correctly unroll a square array', () => {
      const squareArray = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
      const expectedOutput = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      
      const result = unroll(squareArray);
      
      expect(result).toEqual(expectedOutput);
    });
  
    it('should correctly unroll a larger square array', () => {
      const squareArray = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
      ];
      const expectedOutput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
      
      const result = unroll(squareArray);
      
      expect(result).toEqual(expectedOutput);
    });
  
    it('should correctly unroll a non-square array', () => {
      const squareArray = [
        [1, 2, 3],
        [4, 5, 6]
      ];
      const expectedOutput = [1, 2, 3, 4, 5, 6];
      
      const result = unroll(squareArray);
      
      expect(result).toEqual(expectedOutput);
    });
  
    it('should correctly unroll an empty array', () => {
      const squareArray = [];
      const expectedOutput = [];
      
      const result = unroll(squareArray);
      
      expect(result).toEqual(expectedOutput);
    });
  });

});

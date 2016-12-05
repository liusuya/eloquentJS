var size = 9;
var oddValue = ' ';
var evenValue = '#';

function alternator(size, startsOdd, oddValue, evenValue) {
  	var oddIndex = startsOdd;
  	var result = '';
	for (var i = 0; i < size; i++) {
      if (oddIndex)
        result += oddValue;
      else
        result += evenValue;
      oddIndex = !oddIndex;
    }
  	result += '\n';
  	return result;
}

oddRow = alternator(size, true, oddValue, evenValue);
evenRow = alternator(size, false, oddValue, evenValue);
chessBoard = alternator(size, true, oddRow, evenRow);              

console.log(chessBoard);


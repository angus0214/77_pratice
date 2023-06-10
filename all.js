
function createMatrix(n) {
//   google 來的，這邊是 create 空的二為陣列
  let result = new Array(n).fill().map(() => new Array(n).fill(''));
  // 定義各種參數，原本我的寫法，假設 3*3 左上角是 1 中間是 9，採順時針遞增，所以參數看起來不太正規，因為我懶得改 !   
  let counter = n*n;
  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  
  // 這個 while 是計算要跑幾圈   
  while (startCol <= endCol && startRow <= endRow) {
    // 從右到左
    for (let i = endCol; i >= startCol; i--) {
      result[endRow][i] = counter;
      counter--;
    }
    endRow--;
    // 從下到上
    for (let i = endRow; i >= startRow; i--) {
      result[i][startCol] = counter;
      counter--;
    }
    startCol++;
    // 從左到右
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter;
      counter--;
    }
    startRow++;
    // 從上到下
    for (let j = startRow; j <= endRow; j++) {
      result[j][endCol] = counter;
      counter--;
    }
    endCol--;
  }
  // 以上可以調換執行順序，就可以達到不同的順序邏輯  
  console.log('result', result);
}

createMatrix(5);

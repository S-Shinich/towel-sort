
// You should implement your task here.
module.exports = function towelSort (matrix) {
  const initEl = [];
  if ( typeof(matrix) === 'undefined' ) return [] ;
  for (let i = 0 ; i < matrix.length; i++ ) {
    i % 2 === 0 ?  initEl.push(...matrix[i]) : initEl.push(...matrix[i].reverse()); 
  }
  return initEl;
}

module.exports = function longestConsecutiveLength(array) {
  if (array.length == 0) {return 0;}
  
  var uniq = [ ...new Set(array) ];
  uniq.sort(function (a,b) {return a-b});
  
  //var count = 0;

  var seq_arr = [uniq[0]];
  var tmp_arr = [uniq[0]]
  for (i = 1; i < uniq.length; i++) {         
      if (uniq[i] == uniq[i-1]+1) {
          tmp_arr.push(uniq[i]);
      } else {
          if (tmp_arr.length > seq_arr.length) {
              seq_arr = tmp_arr;
          }
          tmp_arr = [uniq[i]];
      }
  }
  if (tmp_arr.length > seq_arr.length) {
      seq_arr = tmp_arr;
  }
  return seq_arr.length;
}




  
//   var maxLength = 0;
//   var len = 0;
//   for (var i = 1; i < uniq.length; i++) {
//       if (uniq[i] == uniq[i-1]+1) {
//           len++;
//       } 
//       else if (len >= maxLength) {
//           maxLength = len;
//           len = 0;
//           //startIndex == start;
//       }
//         //length = 1;
//         //start = i;
      
//   }
//   return maxLength;
// }


  
  //   var length = 0; 
  //   var longestItem = uniq[0];
  //   uniq.forEach(function(item){
  //       item+='';
  //       for(var i = 0, l = item.length; i < l; i++){
  //           if(i > length){
  //               length = i, longestItem = item;}
  //       }
  //   });
  //   return longestItem;
  // }
  


  // var res = array.filter(isSequence);
  // function isSequence (value){
  //   var i = value;
  //   if (i+1 == value){
  //     return value;
  //   }
  // }


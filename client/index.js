'use strict';
 $(document).ready(init);

 function init() {
  //  $('#go').click(go);
  //  $('#calc').click(calc);

  $('#clear').click(clear);
  $('.article').click(setText);
  $('.noun').click(setText);
  $('.adj').click(setText);
  $('.verb').click(setText);
 }

 function clear() {
   $('#sentence').text('');
 }

 function setText() {
   var oldText = $('#sentence').text();
   var text = $(this).text();
   var newText = oldText + ' ' + text;
   $('#sentence').text(newText);
 }


// function go() {
//   var numbers = $('#numbers').val();
//   numbers = numbers.split(',');
//   numbers = numbers.map(function(n) {
//     return n * 1;
//   });
//
//   var sum = numbers.reduce(function(old, curr) {
//     return old + curr;
//   });
//
//   $('#sum').text(sum);
//
//   var products = numbers.reduce(function(old, curr) {
//     return old * curr;
//   });
//
//   $('#product').text(products);
// }


// function calc() {
//   var x = parseInt($('#x').val());
//   var op = $('#op').val();
//   var y = parseInt($('#y').val());
//   var answer;
//
//   switch (op) {
//     case '+':
//       answer = x + y;
//       break;
//     case '-':
//       answer = x - y;
//       break;
//     case '*':
//       answer = x * y;
//       break;
//     case '/':
//       answer = x / y;
//   }
//
//   $('#answer').text(answer);
// }

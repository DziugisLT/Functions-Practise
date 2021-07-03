# Functions-Practise

**Tasks:**

1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things: <br /><br />
  1.1. Display a prompt window for the user to input the number of the
  selected option. The prompt should look like this: <br><br>
  What is your favourite programming language?<br>
  0: JavaScript<br>
  1: Python<br>
  2: Rust<br>
  3: C++<br>
  (Write option number)<br><br>
  1.2. Based on the input number, update the 'answers' array property. For
  example, if the option is 3, increase the value at position 3 of the array by
  1 and make sure to check if the input is a number and if the number makes
  sense (e.g. answer 52 wouldn't make sense, right?)<br>
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. **Bonus:** Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?

   **Test data for bonus:**<br><br>
   § Data 1: [5, 2, 3]<br>
   § Data 2: [1, 5, 3, 9, 6, 1]

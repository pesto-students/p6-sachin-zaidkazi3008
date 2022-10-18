function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }

  let message = `count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

/* Output of this program is : count is 0 because of 
the Increment function changes count is incrementing 
on first time but message of count is not incrementing in this code
 thats why "count is 0 output"
 */


// statements can have labels
// Break can refer to them

loop: for (;;) {
  console.log('me first');

  if (true) {
    console.log('and me once too');
    break loop;
  }
}

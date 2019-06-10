var age = '';
while (age == '' || age == 'ok') {
  age = prompt("Please enter your age");
  if ($.isNumeric(age) === false) {
    continue;
  }
  if (age == 21) {
    alert("Happy 21st Birthday!");
    continue;
  }
  if (age > 21) {
    alert("You are old");
    continue;
  }
  if (age < 21) {
    alert("You are too young to be in this bar!");
  }
};

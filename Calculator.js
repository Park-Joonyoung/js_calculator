function insert(num) {
  document.form.textview.value = document.form.textview.value + num;
}

function equal() {
  let exp = document.form.textview.value;
  if (exp) {
    document.form.textview.value = eval(document.form.textview.value);
  }
}

function wipe() {
  document.form.textview.value = "";
}

function bs() {
  let exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0, exp.length - 1);
}

let lightTheme = "styles/light.css";
let darkTheme = "styles/dark.css";
let dailyTotal = 0;

var stack2 = new Stack('number');

// Clears the screen on click of C button.
function clearScreen() {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Reset!'
  }).then((result) => {
    if (result.isConfirmed) {
      document.getElementById("result").value = "0";
      dailyTotal = 0;
      stack2.clearStack();
      Swal.fire(
          'Reset!',
          'The daily total has been reset'
      )
    }
  })
}
// Displays entered value on screen.
function liveScreen(value) {
  let res = document.getElementById("result");
  if(res.value == "undefined"){
    res.value = "0";
  }
  stack2.push(value);
  dailyTotal += value;
  console.log(dailyTotal.toFixed(2));
  res.value = dailyTotal.toFixed(2);
}
// Swaps the style sheet in order to  achieve dark mode.
function changeTheme() {
  let darkMode = document.getElementById("dark-mode");
  let theme = document.getElementById("theme");
  if (theme.getAttribute("href") == lightTheme) {
    theme.href = darkTheme;
    darkMode.innerHTML = "Light Mode 🌞";
  } else {
    theme.href = lightTheme;
    darkMode.innerHTML = "Dark Mode 🌙";
  }
}

function undo(){
  let res = document.getElementById("result");
  if(!stack2.isEmpty()){
    dailyTotal -= stack2.pop();
    res.value = dailyTotal.toFixed(2);
  }


}
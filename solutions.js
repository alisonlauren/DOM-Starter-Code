<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Button Click</title>
</head>
<body>
  <!-- HTML goes here -->
  <button onclick="onButtonClick()">Click Me</button>
  <script>
    // JavaScript goes here
    function onButtonClick() {
      console.log("Button Pressed");
    }
  </script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Button Pressed</title>
</head>
<body>
  <!-- HTML goes here -->
  <button id="myButton">Click Me!</button>
  <script>
    // JavaScript goes here
    const button = document.querySelector('#myButton')

    button.addEventListener('click', function(event){
      if(event.button === 0){
        console.log('You Left Clicked')
      }
    })
  </script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Scroll Events</title>
</head>
<body>
  <!-- HTML goes here -->
  <h3>Scroll the page and open the dev tools to see the console!</h3>

  <script>
    // JavaScript goes here
    window.addEventListener('scroll', () => {
      console.log('You Change the size of the Window!')
    })

    // with debounce
    let timeout;
    const delay = 100; //ms to wait before running function
    window.addEventListener('resize', () => {
      timeout = setTimeout(() => {
        console.log('You Change the size of the Window on a debounced callback!')
      }, delay)
    })
  </script>
</body>
</html>
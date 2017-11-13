// Add DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
    // console.log("DOM fully loaded and parsed");
  var body = document.querySelector('body');
  var message = document.querySelector('h1');
  var lightSwitch = document.querySelector('.switch');

  lightSwitch.addEventListener('click', function() {
    lightSwitch.classList.toggle('off');
    body.classList.toggle('dark');
    if (lightSwitch.classList.contains('off')) {
      message.innerText = "Hey, who turned off the lights?";
    } else {
      message.innerText = "It's so bright in here!";
    }
  });

  });

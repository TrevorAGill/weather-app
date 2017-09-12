var apiKey = require('./../.env/').apiKey;
$(document).ready(function(){
  $('#weatherLocation').click(function() {
      let city = $('#location').val();
      $('#location').val("");

      let request = new XMLHttpRequest();
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

      request.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
          let response = JSON.parse(this.responseText);
          getElements(response);
        }
        // } else {
        //   $('#showErrors').text("There was an error processing your request. Please try again.")
        // }
      }

      request.open("GET", url, true);
      request.send();

      let getElements = function(response) {
        $('#showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('#showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
      }
    });
  });



// var apiKey = require('./../.env/').apiKey;
// $(document).ready(function(){
//   $('#weatherLocation').click(function() {
//       let city = $('#location').val();
//       console.log(city);
//       // let url = "http://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=e241fea983043a22d35a1c366f5a9058"
//
//       $('#location').val("");
//
//       $.ajax({
//         url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
//         type: 'GET',
//         data: {
//           format: 'json'
//         },
//         success: function(response) {
//           console.log("success");
//           $('#showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
//           $('#showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
//         },
//         error: function() {
//           console.log("error");
//           // $('#showErrors').text("There was an error processing your request. Please try again.")
//         }
//       });
//
//
//     });
//   });

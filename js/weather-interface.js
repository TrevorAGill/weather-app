//Vanilla JS api call

// var apiKey = require('./../.env/').apiKey;
// $(document).ready(function(){
//   $('#weatherLocation').click(function() {
//     let city = $('#location').val();
//     $('#location').val("");
//
//
//     let request = new XMLHttpRequest();
//     let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
//
//     request.onreadystatechange = function() {
//       if(this.readyState === 4 && this.status === 200) {
//         let response = JSON.parse(this.responseText);
//         populateFrontEnd(response);
//       } else {
//         $('#showErrors').text("There was an error processing your request. Please try again.")
//       }
//     }
//
//     request.open("GET", url, true);
//     request.send();
//
//     var populateFrontEnd = function(response) {
//       $('#showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
//       $('#showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
//     }
//   });
// });

//Vanilla JS API call with promises

var apiKey = require('./../.env/').apiKey;
$(document).ready(function(){
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");

    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    let promise2 = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://api.openweathermap.org/data/2.5/weather?q=Bend&appid=${apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    let promises = [promise,promise2];
    // console.log("OUT"+promises);

    Promise.all(promises)
      .then(function(responses) {
        // console.log("IN then" +promises);
        // console.log("IN thenresponses"+responses);

        responses.forEach(function(response){
          var populateFrontEnd = JSON.parse(response);
          console.log(populateFrontEnd);
          $('#showHumidity').append(`The humidity in ${populateFrontEnd.name} is ${populateFrontEnd.main.humidity}%<br>`);
          $('#showTemp').append(`The temperature in ${populateFrontEnd.name} is ${populateFrontEnd.main.temp}<br>` );
        });


    // function(error) {
    //   $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    // );
    });
  });
});


//Jquery AJAX api call

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
//           $('#showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
//           $('#showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
//         },
//         error: function() {
//           $('#showErrors').text("There was an error processing your request. Please try again.")
//         }
//       });
//
//
//     });
//   });

//Jquery AJAX api call with promises
//
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
//           $('#showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
//           $('#showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
//         },
//         error: function() {
//           $('#showErrors').text("There was an error processing your request. Please try again.")
//         }
//       });
//
//
//     });
//   });

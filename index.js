// $(function() {
//     $(window).scroll(function () {
//         if($(this).scrollTop()>10){
//             $('nav').addClass('background')
//             $('.header .menu li a').css('color', 'white')
//         } else {
//             $('nav').removeClass('background')
//             $('.header .menu li a').css('color', 'black')
//         }
//     })
// })

$(document).ready(function(){
  $('#nav-icon4').click(function(){
    $(this).toggleClass('open');
  });
});

let i = 0;
let index = 0;
let interval = null;
let words = ['Coding Enthusiast ','Product Analyst ','Competetive Gamer ','Mediocre Guitar Player '];
function typeWriter() {
    let txt = words[i].substring(0,index + 1);
    var element = document.getElementById("typewriter");
    element.innerHTML = txt;
    index++;
    if (txt === words[i]){
        clearInterval(interval);
        if (i === words.length - 1){
            i = 0;
        } else {
            i++;
        }
        index = 0;
        setTimeout(function (){
            element.innerHTML="";
            interval = setInterval(typeWriter,100);
        },1500);
    }
}

interval = setInterval(typeWriter,50);


'use strict';

var apiKey = "rbR0lm79ljgCAmxwn3jQTvjQRVvjGM7e1nYuH1q0"

var baseURL = 'https://api.nps.gov/api/v1/parks?stateCode=';

function formatQueryParams(params) {
  var queryItems = params.map(element => `${encodeURIComponent(element)}=${encodeURIComponent(params[element])}`);
  return queryItems.join('&');
}

function getNationalParks(stateCode, maxResults=10){
  var queryString = formatQueryParams(stateCode);
  var url = `${baseURL}${queryString}`;
  console.log(url);

  fetch (url)
  .then (response => {
    if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
  })
  .then (responseJson => displayResults(responseJson, maxResults))
  .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

function displayResults(responseJson, maxResults) {
  console.log(responseJson);
  $('#results-list').empty();

  for(let i=0;i<responseJson.data.length & i<maxResults ;i++) {
    $('#results-list').append(
      `<li><p>${responseJson.data[i].fullName}</p><p>${responseJson.data[i].description}</p><a href="${responseJson.data[i].url}" target="_blank">Website</a></li>`
    )
  }

  $('#results').removeClass('hidden');
}


function watchForm() {
$('form').submit(event => {
  event.preventDefault();
  var stateCode = $('#js-stateCode').val().split(',');
  var maxResults = $('#js-max-results').val();
  console.log(stateCode);
  getNationalParks(stateCode, maxResults);
})
}

$(watchForm());

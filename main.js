// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let currentStatus = false

const errorModal = document.querySelector('#modal')
errorModal.setAttribute('class', 'hidden');

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  const heart = document.querySelectorAll('.like-glyph');
  for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener('click', (e) => {
      currentStatus = !currentStatus;
      mimicServerCall()
      .then(() => {
        if (currentStatus) {
          e.target.innerText = FULL_HEART;
          e.target.setAttribute('class', 'like-glyph activated-heart');
        } else {
          e.target.innerText = EMPTY_HEART;
          e.target.setAttribute('class', 'like-glyph')
        };
      })
      .catch((error) => {
        errorModal.removeAttribute('class');
        const errorModalMessage = document.querySelector('#modal-message');
        errorModalMessage.innerText = error;
        setTimeout(() => {
          errorModal.setAttribute('class', 'hidden');
        }, 3000);
      })
    });
  };
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

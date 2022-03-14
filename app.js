//init github class
const github = new Github;

// init UI class 
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// search input Event Listner 
searchUser.addEventListener('keyup', (e) => {
  // get Input text
  const userText = e.target.value;

  if (userText !== ''){
    // Make HTTP call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          // Show alert
          ui.showAlert('User Not Found', 'alert alert-danger');
        } else {
          // Show Profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
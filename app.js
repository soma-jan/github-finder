// Init Github
const github = new Github();
const ui = new UI();

// Search input
const searchuser = document.getElementById('searchuser');

// Search input event listener
searchuser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    // Make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === 'Not Found') {
        // Show alert

        ui.showAlert('user not found', 'alert alert-danger');
      } else {
        // Show profile
        console.log(data);
        ui.showProfile(data.profile);
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});

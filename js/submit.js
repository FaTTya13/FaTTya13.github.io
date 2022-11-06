const submitButton = document.getElementsByClassName('submitBtn')[0];
const emailInput = document.getElementById('email');
const nickNameInput = document.getElementById('nickName');
const commentInput = document.getElementById('comment');
const modal = document.getElementById('modal');
const overlayField = document.getElementById('overlay');
let users = [];

submitButton.addEventListener('click', () => {
  if (emailInput.value === '' || nickNameInput.value === '') {
    submitButton.disabled
    submitButton.style.backgroundColor = "red"
  } else {
      let user = {
        email: emailInput.value,
        nickName: nickNameInput.value,
        comment: commentInput.value
      };
      
      submitButton.style.backgroundColor = "#00b285";
      users.push(user);
      console.log(`User added to database`);
      modal.classList.remove('active')
      overlayField.classList.remove('active')
      alert('Заявка подана')
    }
    localStorage.setItem('users', JSON.stringify(users));
});

if (JSON.parse(localStorage.getItem('users').length >= 0)) {localStorage.removeItem(users)};

function submitEmail() {
  const email = document.getElementById('email-input').value;
  const error = document.getElementById('email-error');
  const info = document.getElementById('personal-info');
  const form = document.getElementById('email-form');

  const regex = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!regex.test(email)) {
    error.innerText = "Email không hợp lệ!";
  } else {
    error.innerText = "";
    form.classList.add('hide');
    info.classList.remove('hide');
  }
}

function toggleSkill(headerElement) {
  const skillBody = headerElement.parentElement.querySelector('.skill-body');
  const btn = headerElement.querySelector('button');

  if (skillBody.classList.contains('hide')) {
    skillBody.classList.remove('hide');
    btn.innerText = "View Less";
  } else {
    skillBody.classList.add('hide');
    btn.innerText = "View More";
  }
}

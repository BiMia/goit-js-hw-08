import throttle from 'lodash.throttle';

const saveFormState = (form) => {
  const formData = new FormData(form);
  const formState = {
    email: formData.get('email'),
    message: formData.get('message')
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
};

const populateForm = (form) => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const formState = JSON.parse(savedData);
    form.elements.email.value = formState.email;
    form.elements.message.value = formState.message;
  }
};


const resetForm = (form) => {
    form.reset();
    localStorage.removeItem('feedback-form-state');
};

const initForm = () => {
  const form = document.querySelector('.feedback-form');
  
  populateForm(form);

  form.addEventListener('input', throttle(() => saveFormState(form), 500));

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    console.log({
      email: formData.get('email'),
      message: formData.get('message')
    });
    resetForm(form);
  });
};

initForm();

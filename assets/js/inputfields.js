import './elements.js';
import './icons.js';
import './otpinput.js';


document.addEventListener('DOMContentLoaded', function () {

const showpassIcon = document.querySelectorAll('.showpassIcon');

const openEyeIcon = `<svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-eye"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>`;
    
const closeEyeIcon = `<svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-eye-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" /><path d="M3 3l18 18" /></svg>`;

  // Open Eye Icon
  document.querySelectorAll('.open-eye').forEach(span => {
    span.innerHTML = openEyeIcon;
  });

   // Close Eye Icon
   document.querySelectorAll('.close-eye').forEach(span => {
    span.innerHTML = closeEyeIcon;
  });


document.querySelectorAll('.showpassIcon').forEach(showpassword => {
    showpassword.addEventListener('click', () => {
    
        const passwordInput = showpassword.closest('.input_group').querySelector('input[type="password"], input[type="text"]');
      
        const isPasswordHidden = passwordInput.type === 'password';
        
        if (isPasswordHidden) {
            // Show password
            passwordInput.type = 'text';
            showpassword.innerHTML = openEyeIcon;
            showpassword.classList.add("open-eye");
            showpassword.classList.remove("close-eye");
        } else {
            // Hide password
            passwordInput.type = 'password';  
            showpassword.innerHTML = closeEyeIcon;
            showpassword.classList.add("close-eye");
            showpassword.classList.remove("open-eye");
        }
    });
});


  document.querySelectorAll('.checkbox-group').forEach(group => {
    const checkboxes = group.querySelectorAll('.group-checkbox');

    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function () {
        if (this.checked) {
          checkboxes.forEach(cb => {
            if (cb !== this) {
              cb.checked = false;
            }
          });
        }
      });
    });
  });


});

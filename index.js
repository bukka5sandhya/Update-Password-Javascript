let updatePasswordFormEle = document.getElementById("updatePasswordForm");
let newPasswordEle = document.getElementById("newPassword");
let confirmPasswordEle = document.getElementById("confirmPassword");
let newPasswordErrMsgEle = document.getElementById("newPasswordErrMsg");
let confirmPasswordErrMsgEle = document.getElementById("confirmPasswordErrMsg");
let updateBtnEle = document.getElementById("updateBtn");

let validateNewPassword = function() {
    if (newPasswordEle.value === "") {
        newPasswordErrMsgEle.textContent = "Required*";
    } else {
        newPasswordErrMsgEle.textContent = "";
    }

};

let validateConfirmPassword = function() {
    let newPassword = newPasswordEle.value;
    let confirmPassword = confirmPasswordEle.value;

    if (newPassword !== confirmPassword) {
        confirmPasswordErrMsgEle.textContent = "Passwords must be same";
    } else {
        confirmPasswordErrMsgEle.textContent = "";
    }
}


newPasswordEle.addEventListener("blur", validateNewPassword);
confirmPasswordEle.addEventListener("blur", validateConfirmPassword);
updatePasswordFormEle.addEventListener("submit", function(event) {
    validateNewPassword();
    validateConfirmPassword();
    event.preventDefault();
});
const fieldName = document.querySelector(".profile__name");
const fieldJob = document.querySelector(".profile__job");
const editButton = document.querySelector(".profile__edit");
const popupContainer = document.querySelector(".popup");
const closeButton = popupContainer.querySelector(".popup__close");
const activeClass = "popup_opened";
const form = popupContainer.querySelector(".form");
const inputName = popupContainer.querySelector(".form__input_type_name");
const inputJob = popupContainer.querySelector(".form__input_type_job");
const submitBotton = form.querySelector(".form__submit");

function openPopup(event) {
    event.preventDefault();
    inputName.value = fieldName.textContent;
    inputJob.value = fieldJob.textContent;
    popupContainer.classList.add(activeClass);
}

function validate(formFields) {
    let validForm = true;

    formFields.forEach((field) => {
        let inputValue = field.querySelector(".form__input").value.trim();
        let errMessage = field.querySelector(".form__error-message");

        if (inputValue === "") {
            errMessage.classList.add("form__error-message_active");
            errMessage.textContent = "поле не должно быть пустым";
            validForm = false;
        } else if (inputValue.lenght > 29) {
            errMessage.classList.add("form__error-message_active");
            errMessage.textContent = "Текст слишком длинный";
            validForm = false;
        } else {
            errMessage.classList.remove("form__error-message_active");
        }
    });
    return validForm;
}


function formSubmitHandler(event) {
    event.preventDefault();

    const fields = form.querySelectorAll(".form__field");

    if (validate(fields)) {
        fieldName.textContent = inputName.value;
        fieldJob.textContent = inputJob.value;
        popupContainer.classList.remove(activeClass);
    }
}

function closePopup() {
    const errorsMsg = document.querySelectorAll(".form__error-message");
    errorsMsg.forEach((item) =>
        item.classList.remove("form__error-message_active")
    );
    popupContainer.classList.remove(activeClass);
}

editButton.addEventListener("click", openPopup);
form.addEventListener("submit", formSubmitHandler);
closeButton.addEventListener("click", closePopup);
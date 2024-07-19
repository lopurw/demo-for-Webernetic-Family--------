document.addEventListener("DOMContentLoaded", () => {
    const openModalButton = document.getElementById("openModal");
    const modal = document.getElementById("modal");
    const modalOverlay = document.getElementById("modalOverlay");
    const modalContent = document.getElementById("modalContent");
  
    openModalButton.addEventListener("click", () => {
      modal.style.display = "flex";
      modalContent.innerHTML = `
        <div class="modal__close" id="modalClose"><img src="img/cross.svg" alt=""></div>
        <form class="login-form">
          <h2 class="login-form__title">Войти в систему</h2>
          <div class="login-form__group">
            <input type="text" id="email-phone" class="login-form__input" placeholder="Email/Телефон" required>
            <input type="password" id="password" class="login-form__input" placeholder="Пароль" required>
          </div>
          <div class="login-form__checkbox">
            <input type="checkbox" id="remember-password" class="login-form__checkbox-input">
            <label for="remember-password" class="login-form__checkbox-label">Запомнить пароль</label>
          </div>
          <a href="#" class="login-form__link">Восстановить</a>
          <div class="login-form__buttons">
            <button type="submit" class="login-form__button login-form__button--login">Войти</button>
            <button type="button" class="login-form__button login-form__button--register">Зарегистрироваться</button>
          </div>
        </form>
      `;
  
      const modalClose = document.getElementById("modalClose");
      modalClose.addEventListener("click", () => {
        modal.style.display = "none";
      });
    });
  
    modalOverlay.addEventListener("click", () => {
      modal.style.display = "none";
    });
  });
  
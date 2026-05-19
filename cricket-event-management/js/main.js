(function () {
  "use strict";

  var backToTop = document.querySelector(".back-to-top");

  if (backToTop) {
    window.addEventListener("scroll", function () {
      backToTop.classList.toggle("visible", window.scrollY > 320);
    });

    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  var filterButtons = document.querySelectorAll(".filter-btn");
  var eventCards = document.querySelectorAll(".event-card");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var filter = button.getAttribute("data-filter");

      filterButtons.forEach(function (item) {
        item.classList.remove("active");
      });
      button.classList.add("active");

      eventCards.forEach(function (card) {
        var status = card.getAttribute("data-status");
        card.classList.toggle("hidden", filter !== "all" && status !== filter);
      });
    });
  });

  function handleForm(formId, messageId, successText) {
    var form = document.getElementById(formId);
    var message = document.getElementById(messageId);

    if (!form || !message) {
      return;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        message.textContent = "Please fill all required fields correctly.";
        message.className = "form-message error";
        form.reportValidity();
        return;
      }

      message.textContent = successText;
      message.className = "form-message success";
      form.reset();
    });
  }

  handleForm("registrationForm", "registrationMessage", "Registration submitted successfully.");
  handleForm("contactForm", "contactMessageStatus", "Message sent successfully.");
})();

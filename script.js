const viewToggle = document.querySelectorAll(".view-toggle");
const toggleText = document.querySelectorAll(".toggle-text");

viewToggle.forEach((toggleSingular) => {
    toggleSingular.addEventListener("click", () => {
      const panel = toggleSingular.previousElementSibling;
      panel.classList.toggle("active");
      let txt =  toggleSingular.innerText;
      toggleSingular.innerText = txt == '…View more' ? ' ...View less' : '…View more';
    });
  });

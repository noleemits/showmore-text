//look for the the required classe the one that will be clicked to extend and the one that will be extended
const viewToggle = document.querySelectorAll(".view-toggle");
const toggleText = document.querySelectorAll(".toggle-text");

viewToggle.forEach((toggleSingular) => {
    toggleSingular.addEventListener("click", () => {
      //The view more or be less need to be placed at the end of the paragraph, and the paragraph should be set to none initially  
      const panel = toggleSingular.previousElementSibling;
      //you need to create a class active and set it to display block, inline, or inline-block  
      panel.classList.toggle("active");
      let txt =  toggleSingular.innerText;
      toggleSingular.innerText = txt == '…View more' ? ' ...View less' : '…View more';
    });
  });

document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.getElementById("myDropdown");
  
    document.addEventListener("change", () => handleDropdown(dropdown.value));
  
    fetch("http://localhost:3000/horses").then((res) => res.json()).then((json) => console.log(json));
  });
  
  function handleDropdown(selection) {
    const vet = document.getElementById("vet-appts");
    vet.classList = "hidden";
  
    const farrier = document.getElementById("farrier-appts");
    farrier.classList = "hidden";
  
    // find both sections, set them to consts and then set both of their classlists to equal hidden
    console.log(selection);
    if (selection === "vet") {
      vet.classList = "";
    }
    if (selection === "farrier") {
      farrier.classList = "";
    }
    // remove class hidden from the correct section element.classList = ""
  }
  
  function meetTheBarn() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
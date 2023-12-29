
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("barn-form");
    form.addEventListener("submit", (event) => searchHorse(event));
    const dropdown = document.getElementById("myDropdown");
  
    document.addEventListener("change", () => handleDropdown(dropdown.value));
  });
  
  function searchBarn(event) {
    event.preventDefault();
  
    fetch(
      `http://localhost:3000/horses`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/vnd.github.v3+json",
        },
      },
    )
      .then((resp) => resp.json())
      .then((json) => {
        const horseList = document.getElementById("results-list");
        horseList.innerHTML = "";
        console.log(json)
        displayBarn(json);
        console.log(horseList)
        const form = document.getElementById("result-form");
        form.reset();
      });
  }
  
  function displayBarn(horses) {
    const horseList = document.getElementById("barn-list");
    horses.forEach((horse) => {
      const li = document.createElement("li");
      li.innerHTML = `<p>${horse.name}, ${horse.color}, ${horse.breed}</p>`;
      horseList.appendChild(li);
    });
  }
  
  function searchHorse(event) {
    event.preventDefault();
    const searchValue = document.getElementById("search").value;
    fetch(`http://localhost:3000/horses?name=${searchValue}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((json) => displaySingleHorse(json[0]));
  }
  
  function displaySingleHorse(horseData) {
    const singleHorse = document.getElementById("horse-results");
    singleHorse.innerHTML = `<p>Name: ${horseData.name}</p><p>Breed: ${horseData.breed}</p><p>Color: ${horseData.color}</p>`
    // find a place on the page and create a new element and put the horse data into that element to display it
  }

  
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
  
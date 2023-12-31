
  document.addEventListener("DOMContentLoaded", () => {
    const form1 = document.getElementById("horse-form");
    form1.addEventListener("submit", (event) => searchHorse(event));

    const form2 = document.getElementById("trainer-form");
    form2.addEventListener("submit", (event) => searchTrainer(event));

    const dropdown = document.getElementById("myDropdown");
  
    document.addEventListener("change", () => handleDropdown(dropdown.value));

    const serviceButton = document.querySelector(".services-button");
    serviceButton.addEventListener("click", () => displayText());
    
    const barnButton = document.getElementById("barn-occupants");
    barnButton.addEventListener("click", () => {
    searchBarn()
   }, {once : true});
  });

  function searchBarn() {
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
      .then((json) => displayBarn(json));
        
      };
  
  function displayBarn(horses) {
    const horseList = document.getElementById("barn-horses");
    horses.forEach((horse) => {
      const ul = document.createElement("ul");
      ul.innerHTML = `<p>${horse.name}, ${horse.color}, ${horse.breed}</p> <img src="${horse.URL}"</img> <p> ${horse.awards}</p>`;
      horseList.appendChild(ul);
    });
}
  
  function searchHorse(event) {
    event.preventDefault();
    const searchHorseValue = document.getElementById("search1").value;
    fetch(`http://localhost:3000/horses?name=${searchHorseValue}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((json) => displaySingleHorse(json[0]));
  }

  function searchTrainer(event) {
    event.preventDefault();
    const searchTrainerValue = document.getElementById("search2").value;
    fetch(`http://localhost:3000/trainers?name=${searchTrainerValue}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((json) => displaySingleTrainer(json[0]));
  }
  
  function displaySingleHorse(horseData) {
    const singleHorse = document.getElementById("horse-results");
    singleHorse.innerHTML = `<p>Name: ${horseData.name}</p><p>Breed: ${horseData.breed}</p><p>Color: ${horseData.color}</p><img src="${horseData.URL}"></img><p>Awards: ${horseData.awards}`
    // find a place on the page and create a new element and put the horse data into that element to display it
  }

  function displaySingleTrainer(trainerData) {
    const singleTrainer = document.getElementById("trainer-results");
    singleTrainer.innerHTML = `<p>Name: ${trainerData.name}</p><p>Specialty: ${trainerData.specialty}</p><p>Rate: ${trainerData.rate}</p>`
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
  

  function displayText() {
    const text = document.getElementById("servicesText");
    text.style.display = "block";
  }

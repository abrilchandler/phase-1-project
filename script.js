/*
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("barn-form");
    form.addEventListener("submit", (event) => searchBarn(event))

    const dropdown = document.getElementById("myDropdown");
  
    document.addEventListener("change", () => handleDropdown(dropdown.value));
  });
  
  
  function searchBarn(event) {
    const searchValue = document.getElementById("search").value
  
    event.preventDefault()
    
  fetch(`  http://localhost:3000/horses
  `, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
       Accept: "application/vnd.github.v3+json" 
    },  
  })
  .then(resp => resp.json())
  .then(json => {
    const horseList = document.getElementById("result-list")
    horseList.innerHTML = ""
    displayUsers(json.items)
    const form = document.getElementById("result-form");
    form.reset()
  })
  }
  
  
  
  function displayBarn(horses) {
    const horseList = document.getElementById("barn-list")
    horses.forEach((horse) => {
      const li = document.createElement("li")
      li.innerHTML = `<a href="${horse.html_url}">${horse.login}</a>`
      horseList.appendChild(li)
    })
  }
  
  function searchRepo(searchString) {
      fetch(`http://localhost:3000/horses/${searchString}`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
             Accept: "application/vnd.github.v3+json"  
          }
      })
      .then(resp => resp.json())
      .then(json => console.log(json))
  }
  
  
  function postRepo(searchString) {
    fetch(`http://localhost:3000/horses/${searchString}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/vnd.github.v3+json" 
      },
      body: JSON.stringify({
        searchString: "horses"
      })
    })
      .then(resp => resp.json())
      .then(json => console.log(json))
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
  };
  
  function meetTheBarn() {
  document.getElementById("myDropdown").classList.toggle("show");
  }

  */

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("barn-form");
    form.addEventListener("submit", (event) => searchBarn(event));
    const dropdown = document.getElementById("myDropdown");
  
    document.addEventListener("change", () => handleDropdown(dropdown.value));
  });
  
  function searchBarn(event) {
    const searchValue = document.getElementById("search").value;
  
    event.preventDefault();
  
    fetch(
      `http://0.0.0.0:3000/horses
  `,
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
        const horseList = document.getElementById("result-list");
        horseList.innerHTML = "";
        displayUsers(json.items);
        const form = document.getElementById("result-form");
        form.reset();
      });
  }
  
  function displayBarn(horses) {
    const horseList = document.getElementById("barn-list");
    horses.forEach((horse) => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${horse.html_url}">${horse.login}</a>`;
      horseList.appendChild(li);
    });
  }
  
  function searchRepo(searchString) {
    fetch(`http://localhost:3000/horses/${searchString}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/vnd.github.v3+json",
      },
    })
      .then((resp) => resp.json())
      .then((json) => console.log(json));
  }
  
  function postRepo(searchString) {
    fetch(`http://localhost:3000/horses/${searchString}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/vnd.github.v3+json",
      },
      body: JSON.stringify({
        searchString: "horses",
      }),
    })
      .then((resp) => resp.json())
      .then((json) => console.log(json));
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
  

fetch("./data.json") 
  .then(response => response.json())
  .then(data => { 
    const companyInfo = data;
    tableCreate(companyInfo); 
  });

let body;
let table;

let select = document.getElementById("selectedLocation");

function tableCreate(companyInfo) {
  body = document.querySelector("body");
  table = document.querySelector('table');
  body.appendChild(table);

  let locations = companyInfo.flatMap(element => element.Location)

  let uniqueLocations = new Set();

  locations.forEach((location) => {
    if (!uniqueLocations.has(location)) {
      let option = document.createElement("option");
      option.value = location;
      option.textContent = location;
      select.appendChild(option);
      uniqueLocations.add(location);
    }
  });

  for (let j of companyInfo) {
      tr = document.createElement('tr');
      tr.setAttribute("data-location", j.Location)
      table.appendChild(tr);

      for (let k of ["companyName", "Location", "ITdepartment", "N.of internship"]) {
          let td = document.createElement('td');
          td.textContent = Array.isArray(j[k]) ? j[k].join(', ') : j[k];
          tr.appendChild(td);
      }
  }
}

select.addEventListener("change", function () {
  const selectedLocation = this.value;
  const trs = document.querySelectorAll("tr[data-location]");

  trs.forEach(function (tr) {
    if (tr.getAttribute("data-location").indexOf(selectedLocation) === -1) {
      tr.classList.add("hidden");
    } 
    else {
      tr.classList.remove("hidden");
    }
  });
});

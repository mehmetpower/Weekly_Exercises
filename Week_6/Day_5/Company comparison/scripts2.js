


const companyInfo = [
  {
  companyName : "Exoscale",
  Location : ["Lausanne"],
  ITdepartment :  ["IT support", "System & network management"],
  Website : "https://www.exoscale.com/",
  },
  {
  companyName : "Group E",
  Location : ["Fribourg", "Neuchâtel"],
  ITdepartment : ["Microsoft Power Platform"],
  Website : "https://www.groupe-e.ch/fr",
  },
  {
  companyName : "Loyco SA",
  Location : ["Geneve",],
  ITdepartment : ["Software/Application Development"],
  Website : "https://www.loyco.ch/?lang=en",
  },
  {
  companyName : "Nestle",
  Location : ["Orbe"],
  ITdepartment : ["Microsoft Power Platform", "IT Legal, Risk & Compliance", "IT Workforce 360"],
  Website : "https://www.nestle.ch/fr",
  },
  {
  companyName : "phenomX",
  Location : ["Geneve", "Lausanne"],
  ITdepartment : ["Web Design", "Digital Marketing", "Software/Application Development", "Machine Learning", "Data Science"],
  Website : "https://www.phenomxhealth.com/",
  },
  {
  companyName : "SLM",
  Location : ["Nyon"],
  ITdepartment : ["Web Design", "Digital Marketing", "Software/Application Development", "Web Development"],
  Website : "https://slm-sa.com/",
  },
  {
  companyName : "EFG Bank",
  Location : ["Geneve", "Lausanne"],
  ITdepartment : ["IT service managment"],
  Website : "https://www.efginternational.com/ch",
  },
  {
  companyName : "RALPH LAUREN",
  Location : ["Geneve", "Remote"],
  ITdepartment : ["Data Analytics", "Business Intelligence"],
  Website : "https://www.ralphlauren.ch/en/global/about-us/7113",
  },
  {
  companyName : "WSP-BG",
  Location : ["Lausanne"],
  ITdepartment : ["Software/Application Development", "Data Analytics", "Business Intelligence", "Machine Learning", "Data Science","Microsoft Power Platform"],
  Website : "https://www.ralphlauren.ch/en/global/about-us/7113",
  }
  ];

let body;
let table;

function tableCreate() {
  body = document.querySelector("body");
  table = document.createElement('table');
  body.appendChild(table);
  const tableHeaders = ["Company Name", "Location", "IT Department", "Website"];

  let tr = document.createElement('tr');
  table.appendChild(tr);
  for (let i of tableHeaders) {
    if (i != "Location"){
    let th = document.createElement('th');
    th.textContent = i;
    tr.appendChild(th);
    } else {
      let button = document.createElement('button');
      button.textContent = i;
      tr.appendChild(button);
      let div = document.createElement('div');
      button.appendChild(div);
      let input = document.createElement('input');
      input.setAttribute("type", "radio")
      input.setAttribute("id", "Lausanne")
      input.setAttribute("onclick", "hideLocation")
      let label = document.createElement('label');
      label.textContent = "Lausanne"
      label.setAttribute("for", "Lausanne")
      div.appendChild(input)
      div.appendChild(label);
      div = document.createElement('div');
      button.appendChild(div);
      input = document.createElement('input');
      input.setAttribute("type", "radio")
      input.setAttribute("id", "Geneve")
      input.setAttribute("onclick", "hideLocation")
      label = document.createElement('label');
      label.textContent = "Geneve"
      label.setAttribute("for", "Geneve")
      div.appendChild(input);
      div.appendChild(label);
      div = document.createElement('div');
      button.appendChild(div);
      input = document.createElement('input');
      input.setAttribute("type", "radio")
      input.setAttribute("id", "Fribourg")
      input.setAttribute("onclick", "hideLocation")
      label = document.createElement('label');
      label.textContent = "Fribourg"
      label.setAttribute("for", "Fribourg")
      div.appendChild(input);
      div.appendChild(label);
      div = document.createElement('div');
      button.appendChild(div);
      input = document.createElement('input');
      input.setAttribute("type", "radio");
      input.setAttribute("id", "Neuchâtel")
      input.setAttribute("onclick", "hideLocation")
      label = document.createElement('label');
      label.textContent = "Neuchâtel"
      label.setAttribute("for", "Neuchâtel")
      div.appendChild(input)
      div.appendChild(label);
      div = document.createElement('div');
      button.appendChild(div);
      input = document.createElement('input');
      input.setAttribute("type", "radio")
      input.setAttribute("id", "Orbe")
      input.setAttribute("onclick", "hideLocation")
      label = document.createElement('label');
      label.textContent = "Orbe"
      label.setAttribute("for", "Orbe");
      div.appendChild(input);
      div.appendChild(label);
    }
  }

  for (let j of companyInfo) {
    tr = document.createElement('tr');
    tr.setAttribute("Location", j.Location);
    table.appendChild(tr);

    for (let k of ["companyName", "Location", "ITdepartment", "Website"]) {
        let td = document.createElement('td');
        td.textContent = Array.isArray(j[k]) ? j[k].join(', ') : j[k];
        tr.appendChild(td);
    }
  }
}

tableCreate();










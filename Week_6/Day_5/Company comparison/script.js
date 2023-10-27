let body;
let table;
let tr;
let th;
let td;
let td_companyName;
let td_Location;
let td_ITdepartment;
let td_Website;
let table_select;
let row_create;



function tableCreate() {
  body = document.querySelector("body");
  table = document.createElement('table');
  tr = document.createElement('tr');
  body.appendChild(table);
  table.appendChild(tr);
  th = document.createElement('th');
  th.textContent = 'Company Name';
  tr.appendChild(th);
  th = document.createElement('th');
  th.textContent = 'Location';
  tr.appendChild(th);
  th = document.createElement('th');
  th.textContent = 'IT Department';
  tr.appendChild(th);
  th = document.createElement('th');
  th.textContent = 'Website';
  tr.appendChild(th);
  rowCreate()
}

function rowCreate() {
  for (let i = 0; i < companyInfo.length; i++){
    table_select = document.querySelector("table");
    row_create = document.createElement('tr');
    for (let j = 0; j < Object.keys(companyInfo).length; j++){
      td_companyName = document.createElement('td');
      td_companyName.textContent = companyInfo[i].companyName;
      td_companyName.appendChild(row_create);
      td_Location = document.createElement('td');
      td_Location.textContent = companyInfo[i].Location;
      td_Location.appendChild(row_create);
      td_ITdepartment = document.createElement('td');
      td_ITdepartment.textContent = companyInfo[i].ITdepartment;
      td_ITdepartment.appendChild(row_create);
      td_Website = document.createElement('td');
      td_Website.textContent = companyInfo[i].Website;
      td_Website.appendChild(row_create);
    }
    table_select.appendChild(row_create);
  }
}

tableCreate()
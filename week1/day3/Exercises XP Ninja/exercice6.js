function createCalendar(year, month) {
  const calendarDiv = document.getElementById("calendar");
  calendarDiv.innerHTML = ""; 

  const table = document.createElement("table");
  const days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];


  const header = document.createElement("tr");
  for (let day of days) {
    const th = document.createElement("th");
    th.innerText = day;
    header.appendChild(th);
  }
  table.appendChild(header);

  let date = new Date(year, month - 1, 1);
  let firstDay = (date.getDay() + 6) % 7;
  let row = document.createElement("tr");


  for (let i = 0; i < firstDay; i++) {
    row.appendChild(document.createElement("td"));
  }

  
  while (date.getMonth() === month - 1) {
    const td = document.createElement("td");
    td.innerText = date.getDate();
    row.appendChild(td);

 
    if ((date.getDay() + 6) % 7 === 6) {
      table.appendChild(row);
      row = document.createElement("tr");
    }

    date.setDate(date.getDate() + 1);
  }


  if (row.children.length > 0) {
    table.appendChild(row);
  }

  calendarDiv.appendChild(table);
}


createCalendar(2012, 9);

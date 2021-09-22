let mySaves = [];
const input = document.getElementById("input");
const inputButton = document.getElementById("input-button");
const deleteButton = document.getElementById("delete-button");
const tabButton = document.getElementById("tab-button");
const list = document.getElementById("list");
const localSaves = JSON.parse(localStorage.getItem("mySaves"));

if (localSaves) {
  mySaves = localSaves;
  render(mySaves);
}

tabButton.addEventListener("click", function () {
  edge.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    function (tabs) {
      mySaves.push(tabs[0].url);
      localStorage.setItem("mySaves", JSON.stringify(mySaves));
      render(mySaves);
    }
  );
});

function redner(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
  }
  list.innerHTML = listItems;
}

deleteButton.addEventListener("dblclick", function () {
  localStorage.clear();
  mySaves = [];
  render(mySaves);
});


inputButton.addEventListener("click", function () {
    mySaves.push(input.value);
    input.value = ""
    localStorage.setItem("mySaves", JSON.stringify(mySaves));
    redner(mySaves);
});
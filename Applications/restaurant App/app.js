const tables=[
    {id:"table1",name:"Table-1",total:0.00,items:{}},
    {id:"table2",name:"Table-2",total:0.00, items:{}},
    {id:"table3",name:"Table-3",total:0.00, items:{}}
];



const menuItems=[
    {id:"item1",name:"Biryani",price:10.00,type:"main-course"},
    {id:"item2",name:"Pizza",price:20.00,type:"main-course"},
    {id:"item3",name:"Chicken-65",price:100.00,type:"starter"}
   
]


document.addEventListener("DOMContentLoaded", ()=>{
    renderTable(tables);
    renderMenu(menuItems);
});




function renderMenu(menuItems) {
    const menuContainer = document.getElementById("menu-container");

    menuContainer.innerHTML = "";
  
    menuItems.forEach((item) => {
      const menuItem = document.createElement("div");
      menuItem.className = "menu-item";
      menuItem.id = item.id;
      menuItem.draggable = true;
      menuItem.dataset.name = item.name;
      menuItem.dataset.type = item.type;
      menuItem.dataset.price = item.price;
      
  
      menuItem.innerHTML = `
          <h4>${item.name}</h4>
          <p>${item.price.toFixed(2)} - ${item.type}</p>
          `;
      menuContainer.append(menuItem);
      menuItem.addEventListener("dragstart", dragStart);

    });
  }
  
  function renderTable(tablesArray){
    const tablesContainer=document.getElementById("tables-container");
    tablesArray.forEach((tables)=>{
    const tableCard=document.createElement("div");        
    tableCard.className = "table-card";
    tableCard.id = tables.id;
    tableCard.innerHTML=`
         <h4>${tables.name}</h4>
         <p>${tables.total.toFixed(2)}</p>
           <p>Items: ${Object.values(tables.items).reduce(
      (a, b) => a + b.quantity,
      0
    )}</p>
        `
        tablesContainer.append(tableCard) ;    
       
    tableCard.addEventListener("dragover", dragOver);
    tableCard.addEventListener("drop", dropItem);
    })
}


function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
  }
  
  function dragOver(e) {
    e.preventDefault(); //allow drop
  }
  
  function dropItem(e) {
    e.preventDefault(); 

    const itemId=e.dataTransfer.getData("Text");
    const itemElement=document.getElementById(itemId);
     const itemName=itemElement.dataset.name;
     const itemPrice=itemElement.dataset.price;
     const tableId=e.target.id;


    if(itemName && itemPrice && tables.find((table)=>table.id===tableId)){
        addItemToTable(tableId,itemName,itemPrice);
    }
}

function addItemToTable(tableId, itemName, itemPrice) {
    const table = tables.find((table) => table.id === tableId);
  
    if (!table.items[itemName]) {
      table.items[itemName] = { quantity: 0, price: itemPrice };
    }
  
    table.items[itemName].quantity++;
    table.total = table.total + itemPrice;
  
    //update table card UI
    const tableCard = document.getElementById(tableId);
  
    tableCard.querySelector("p").textContent = `Total: ${table.total.toFixed(2)}`;
    tableCard.querySelector(
      "p:nth-of-type(2)"
    ).innerText = `Items: ${Object.values(table.items).reduce(
      (a, b) => a + b.quantity,
      0
    )}`;
  }
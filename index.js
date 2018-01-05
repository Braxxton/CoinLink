var pageData;

function LoadPageData(jsonFileName) {
 
  $.getJSON(jsonFileName, function(result){
    pageData = result;
  });
}


function RenderData(pageData)
{  
  var table = document.createElement("table");
  var tr = table.insertRow(-1); 

  for(var i = 0; i < pageData.groups.length; i++)
  {
    var group = pageData.groups[i];
    var name = group.name;  
    var description = group.description;
    var categories;

    tr = table.insertRow(-1);

    var tabCell = tr.insertCell(-1);
    tabCell.innerHTML = name;
    tabCell.colSpan = 2;
        
    var tabCell = tr.insertCell(-1);
    tabCell.innerHTML = description;
    tabCell.colSpan = 2;

    var divContainer = document.getElementById("MyTable");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
    
    var cat = group.categories[i];
    var name = cat.name;
    var description = cat.description;
  
    tr = table.insertRow(-1);

          //for(var i = 0; group.categories != null && i < group.categories.length; i++)
          //{

    var tabCell = tr.insertCell(-1);
    tabCell.innerHTML = name;
        
    var tabCell = tr.insertCell(-1);
    tabCell.innerHTML = description;                

    var divContainer = document.getElementById("MyTable");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
              
            //}
    for(var i = 0; i < cat.items.length; i++)
    {
      var item = cat.items[i];
      var title = item.title;
      var url = item.url;
    
      tr = table.insertRow(-1);

      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = title;
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = url;

      var divContainer = document.getElementById("MyTable");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);
    }          
  }
}

LoadPageData('bitcoin.json');

$(function() {

  // Load Header Data
  $('#pageTarget').loadTemplate(
    //Specify the template container (or file name of external template)
    $('#pageTemplate'),pageData
  );

  // Render Table Data
  RenderData(pageData);

  
})

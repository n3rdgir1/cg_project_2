function toggleItems(id) {
  var active = document.getElementById(id);
  active.className -= 'inactive';
  $(`#${id}`).siblings()[0].className = 'inactive';
}

function getMenuItems() {
  var items = document.getElementById('items');
  $.getJSON("https://n3rdgir1.github.io/cg_project_2/inventory.json", function(result){
    $.each(result.sort(function(a,b){return a.name.localeCompare(b.name);}), function(i, item){
      if(item.type == 'Cake' || item.type == 'Other') {
        var div = document.createElement('div');
        div.className = `item ${item.type}`;

        var name = document.createElement('h3');
        name.appendChild(document.createTextNode(item.name));
        div.appendChild(name);

        var content = document.createElement('p');
        content.append(item.description);
        div.appendChild(content);

        items.appendChild(div);
      }
    });
    var div = document.createElement('div');
    div.className = 'item';

    var name = document.createElement('h3');
    name.appendChild(document.createTextNode('Custom Orders'));
    div.appendChild(name);

    var content = document.createElement('p');
    content.innerHTML = "Please see our <a href='custom.html'>Custom Orders</a> page";
    div.appendChild(content);

    items.appendChild(div);
  });
}

window.onload = function() {
  headerFooter();
  getMenuItems();
};

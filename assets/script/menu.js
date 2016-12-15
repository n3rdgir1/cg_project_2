function toggleItems(id) {
  var active = document.getElementById(id);
  active.className -= 'inactive';
  $(`#${id}`).siblings()[0].className = 'inactive';
}

function getMenuItems() {
  var menu = document.getElementById('menu');
  $.getJSON("https://n3rdgir1.github.io/cg_project_2/inventory.json", function(result){
    $.each(result, function(i, item){
      if(item.type == 'Cake' || item.type == 'Other') {
        var div = document.createElement('div');
        div.className = `item ${item.type}`;

        var name = document.createElement('h3');
        name.appendChild(document.createTextNode(item.name));
        div.appendChild(name);

        var content = document.createElement('p');
        content.append(item.description);
        div.appendChild(content);

        menu.appendChild(div);
      }
    });
  });
}

window.onload = function() {
  headerFooter();
  getMenuItems();
};

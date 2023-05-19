window.onload = function() {
    var menuItems = document.querySelectorAll('.menu-list a');
  
    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener('click', function() {
        var menuItemText = this.textContent;
        alert('You clicked ' + menuItemText);
      });
    }
  };
  
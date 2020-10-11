function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  function searchcat() {
    var input = document.getElementById('search').value;
    if(input=='Mens'||input=='mens'){
        location = "mens.html";
    }
    else if(input=='Women'||input=='women'){
        location = "women.html";
    }
    else if(input=='Kids'||input=='kids'){
      location = "kids.html";
    }
    else if(input=='furniture'||input=='Furniture'){
      location = "furniture.html";
    }
    else if(input=='shoes'||input=='Shoes'){
      location = "shoes.html";
    }
    else if(input=='electronic'||input=='Electronic'){
      location = "electronic.html";
    }
    else{
      alert('Search not found');
    }
  }
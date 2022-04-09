var x = document.getElementById("divCont");
var y = document.getElementById("divForm");
var z = document.getElementById("divHab");
var a = document.getElementById("divCon");
var b = document.getElementById("divMain");
var i = document.getElementById("image");

function inicio() {
    if (b.style.display === "none") {
        z.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
        a.style.display = "none";
        b.style.display = "inline-block";
    } else {
        z.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
        a.style.display = "none";
        b.style.display = "inline-block";
    }
}
function nosotros() {    
    if (x.style.display === "none") {
        x.style.display = "inline-block";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
    } else {
        x.style.display = "inline-block";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
	}
}
function menu() {
    if (z.style.display === "none") {
        z.style.display = "inline-block";
        x.style.display = "none";
        y.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
    } else {
        z.style.display = "inline-block";
        x.style.display = "none";
        y.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
	}
}
function info() {
    if (y.style.display === "none") {
        y.style.display = "inline-block";
        x.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
        
    } else {
        y.style.display = "inline-block";
        x.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
	}
}



let titleCoffe = document.getElementById('titleCoffe')
let titleCake = document.getElementById('titleCake')
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let left2 = document.querySelector('.left2');
let right2 = document.querySelector('.right2');
let counter = 0;
let coffes = ['imagenes/frape.png','imagenes/espresso.png', 'imagenes/moka.jpg'];
let title = ['Frapé','Espresso','Moka'];
let cakes = ['imagenes/cake.jpg','imagenes/hotcake.jpg', 'imagenes/pay.jpg'];
let title2 = ['Cake','Hotcake','Pay'];

let coffeArray = ()=> {
    left.addEventListener("click", ()=> {
        counter--;
        counter == -1 ? counter = coffes.length-1 : counter;
        titleCoffe.innerHTML = `${title[counter]}`
        changeImage(`${coffes[counter]}`, 'coff');
    });
    right.addEventListener("click", ()=> {
        counter++;
        counter == coffes.length ? counter = 0 : counter;
        titleCoffe.innerHTML = `${title[counter]}`
        changeImage(`${coffes[counter]}`, 'coff');
    }); 
}
let cakeArray = ()=> {
    left2.addEventListener("click", ()=> {
        counter--;
        counter == -1 ? counter = cakes.length-1 : counter;
        titleCake.innerHTML = `${title2[counter]}`
        changeImage(`${cakes[counter]}`, 'pancake');
    });
    right2.addEventListener("click", ()=> {
        counter++;
        counter == cakes.length ? counter = 0 : counter;
        titleCake.innerHTML = `${title2[counter]}`
        changeImage(`${cakes[counter]}`, 'pancake');
    });
}

function changeImage(a, imgid) {
    document.getElementById(imgid).src=a;
}

coffeArray()
cakeArray()

let btnMenu = document.getElementById('btn');
let float = document.getElementById('move');
let pivote = false;

btnMenu.addEventListener('click', () => {
    if (pivote == false){
        float.style.display = 'block';  
        float.setAttribute('class','show');
        btnMenu.setAttribute('class','turn');
        pivote = true;
    }else{
        float.setAttribute('class', 'notShow');
        btnMenu.setAttribute('class','turnAgain');
        pivote = false;
    }    
});

let first = document.getElementById('iniRes');
let init = document.querySelector('.inRes');
let second = document.getElementById('hiRes');
let history = document.querySelector('.hisRes');
let third = document.getElementById('mainRes');
let main = document.querySelector('.menuRes');
let four = document.getElementById('contRes');
let contact = document.querySelector('.contactRes');

first.addEventListener('click', () => {
    init.style.display = 'block';
    history.style.display = 'none';
    main.style.display = 'none';
    contact.style.display = 'none';
    float.setAttribute('class', 'notShow');
    btnMenu.setAttribute('class','turnAgain');
});

second.addEventListener('click', () => {
    init.style.display = 'none';
    history.style.display = 'block';
    main.style.display = 'none';
    contact.style.display = 'none';
    float.setAttribute('class', 'notShow');
    btnMenu.setAttribute('class','turnAgain');
});
third.addEventListener('click', () => {
    init.style.display = 'none';
    history.style.display = 'none';
    main.style.display = 'block';
    contact.style.display = 'none';
    float.setAttribute('class', 'notShow');
    btnMenu.setAttribute('class','turnAgain');
});
four.addEventListener('click', () => {
    init.style.display = 'none';
    history.style.display = 'none';
    main.style.display = 'none';
    contact.style.display = 'block';
    float.setAttribute('class', 'notShow');
    btnMenu.setAttribute('class','turnAgain');
});

let img = document.getElementById('coff1');
let img2 = document.getElementById('pancake1');
let titleCoffeRes = document.getElementById('titleCof');
let titleCakeRes = document.getElementById('titleCak');

img.addEventListener('mousedown', () => {
    counter++;
    counter == coffes.length ? counter = 0 : counter;
    titleCoffeRes.innerHTML = `${title[counter]}`
    changeImage(`${coffes[counter]}`, 'coff1'); 
});

img2.addEventListener('mousedown', () => {
    counter++;
    counter == cakes.length ? counter = 0 : counter;
    titleCakeRes.innerHTML = `${title2[counter]}`
    changeImage(`${cakes[counter]}`, 'pancake1');
})

function initMap() {
  const polanco = { lat: 19.433797973738496, lng: -99.19090478692605 };
  const chicago = new google.maps.LatLng(19.433797973738496, -99.19090478692605);
  let map = new google.maps.Map(document.querySelector('.maps'), {
    center: chicago,
    zoom: 18,
  });
  let mapa = new google.maps.Map(document.querySelector('.mapas'), {
    center: chicago,
    zoom: 18,
  });

  const marker = new google.maps.Marker({
    position: polanco,
    map: map,
  });
}

const TILE_SIZE = 256;

function project(latLng) {
  let siny = Math.sin((latLng.lat() * Math.PI) / 180);
  siny = Math.min(Math.max(siny, -0.9999), 0.9999);
  return new google.maps.Point(
    TILE_SIZE * (0.5 + latLng.lng() / 360),
    TILE_SIZE * (0.5 - Math.log((1 + siny) / (1 - siny)) / (4 * Math.PI))
  );
}

// function inMap() {
//   let cdmx = { lat: 19.433797973738496, lng: -99.19090478692605 };
//   let cdmx = new google.maps.LatLng(19.433797973738496, -99.19090478692605);
//   let mapa = new google.maps.Map(document.getElementById("mapa"), {
//     center: chicago,
//     zoom: 18,
//   });

//   const marker = new google.maps.Marker({
//     position: cdmx,
//     map: mapa,
//   });
// }

// let TILE_SIZE_ = 256;

// function projecto(latLng) {
//   let sinyy = Math.sin((latLng.lat() * Math.PI) / 180);
//   sinyy = Math.min(Math.max(sinyy, -0.9999), 0.9999);
//   return new google.maps.Point(
//     TILE_SIZE_ * (0.5 + latLng.lng() / 360),
//     TILE_SIZE_ * (0.5 - Math.log((1 + siny) / (1 - siny)) / (4 * Math.PI))
//   );
// }

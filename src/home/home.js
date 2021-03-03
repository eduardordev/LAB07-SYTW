
import PR1 from '../imgs/PR1.jpg';
import logo1 from '../imgs/logo1.jpg';
import Ekowraith from '../music/Ekowraith.mp3';
import SMN from '../music/SMN.mp3';
import './home.css';

const head = document.createElement("header");
head.id = "header_home";

const navBar = document.createElement("nav");
navBar.id="navBar";

const ulist = document.createElement("ul");
ulist.id="ulist";
navBar.appendChild(ulist);

const li1 = document.createElement("li");
li1.id = "li1";
ulist.appendChild(li1);

const a1 = document.createElement("a");
a1.id = "a1";
a1.setAttribute("href", "../spitfire/spitfire.html");
a1.innerText="HOME";
li1.appendChild(a1);

const a2 = document.createElement("a");
a2.id = "a1";
a2.setAttribute("href", "../spitfire/spitfire.html");
a2.innerText="SPITFIRE";
li1.appendChild(a2);

const a3 = document.createElement("a");
a3.id = "a1";
a3.setAttribute("href", "../spitfire/spitfire.html");
a3.innerText="MORE";
li1.appendChild(a3);

const a4 = document.createElement("a");
a4.id = "a1";
a4.setAttribute("href", "../spitfire/spitfire.html");
a4.innerText="WORLDS";
li1.appendChild(a4);

const a5 = document.createElement("a");
a5.id = "a1";
a5.setAttribute("href", "../spitfire/spitfire.html");
a3.innerText="SHELTER";
li1.appendChild(a5);

const a6 = document.createElement("a");
a6.id = "a1";
a6.setAttribute("href", "../spitfire/spitfire.html");
a6.innerText="NURTURE";
li1.appendChild(a6);


const t1 = document.createElement("h1");
t1.id = "t_home";
t1.innerText = "El Sueño de Porter";
head.appendChild(t1);

const divhome = document.createElement("div");
divhome.id = "divhome";


const p1home = document.createElement("p");
p1home.id = "p1";
p1home.innerText = "El 15 de julio de 1992 en Chapel Hill, Carolina del Norte, nació Porter Weston Robinson. Durante su niñez y adolescencia siempre fue un gran fanatico de los videojuegos y del anime, ademas de todo esto encontro pasión en los instrumentos y la música, la inspiración musical mas grande que tuvo fue por el juego Dance Dance Revolution por el cuál decidió en iniciar una carrera como productor musical con el alias de 'Ekowraith',bajo ese nombre lanzo algunos tracks en sus inicios como productor musical.";
divhome.appendChild(p1home);

const ekot = document.createElement("h5");
ekot.id = "ekot";
ekot.innerText = "Ekowraith - Booming Track, horrible por cierto";
divhome.appendChild(ekot);

const ekoaudio = document.createElement("AUDIO");
ekoaudio.id = "ekoaudio";
ekoaudio.canPlayType("audio/mpeg");
ekoaudio.setAttribute("src", "../music/Ekowraith.mp3");
divhome.appendChild(ekoaudio);

document.getElementById("body_home").appendChild(head);
document.getElementById("body_home").appendChild(navBar);
document.getElementById("body_home").appendChild(divhome);

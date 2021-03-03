
import PR1 from '../imgs/PR1.jpg';
import logo1 from '../imgs/logo1.jpg';
import Ekowraith from '../music/Ekowraith.mp3';
import SMN from '../music/SMN.mp3';
import './home.css';

const head = document.createElement("header");
head.id = "header_home";


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

const ekoaudio = document.createElement("audio");
ekoaudio.id = "ekoaudio";
ekoaudio.src = Ekowraith;
divhome.appendChild(ekoaudio);

document.getElementById("body_home").appendChild(divhome);
document.getElementById("body_home").appendChild(header);

import PR1 from '../imgs/PR1.jpg';
import logo1 from '../imgs/logo1.jpg';
import Ekowraith from '../music/Ekowraith.mp3';
import SMN from '../music/SMN.mp3';
import './home.css';

const head = document.createElement("header");
head.id = "header_home";

const divhe = document.createElement("div");
divhe.className="container";
head.appendChild(divhe);

const t1 = document.createElement("h1");
t1.id = "t_home";
t1.innerText = "El Sueño de Porter";
divhe.appendChild(t1);

const navBar = document.createElement("nav");
navBar.id="navBar";
divhe.appendChild(navBar);

const ulist = document.createElement("ul");
ulist.id="ulist";
navBar.appendChild(ulist);

const li1 = document.createElement("li");
li1.id = "li1";
ulist.appendChild(li1);

const a1 = document.createElement("a");
a1.id = "a1";
a1.setAttribute("href", "../home/home.html");
a1.innerText="HOME";
li1.appendChild(a1);

const a2 = document.createElement("a");
a2.id = "a1";
a2.setAttribute("href", "../spitfire/spitfire.html");
a2.innerText="SPITFIRE";
li1.appendChild(a2);

const a3 = document.createElement("a");
a3.id = "a1";
a3.setAttribute("href", "../more/more.html");
a3.innerText="MORE";
li1.appendChild(a3);

const a4 = document.createElement("a");
a4.id = "a1";
a4.setAttribute("href", "../worlds/worlds.html");
a4.innerText="WORLDS";
li1.appendChild(a4);

const a5 = document.createElement("a");
a5.id = "a1";
a5.setAttribute("href", "../shelter/shelter.html");
a5.innerText="SHELTER";
li1.appendChild(a5);

const a6 = document.createElement("a");
a6.id = "a1";
a6.setAttribute("href", "../nurture/nurture.html");
a6.innerText="NURTURE";
li1.appendChild(a6);

//empieza body

const divcontainer = document.createElement("div");
divcontainer.id = "dcont";

const divhome = document.createElement("div");
divhome.id = "divhome";
divcontainer.appendChild(divhome);

const diveko = document.createElement("div");
diveko.id = "divs";
diveko.className="left";
divhome.appendChild(diveko);

const p1home = document.createElement("p");
p1home.id = "p1";
p1home.innerText = "El 15 de julio de 1992 en Chapel Hill, Carolina del Norte, nació Porter Weston Robinson. Durante su niñez y adolescencia siempre fue un gran fanatico de los videojuegos y del anime, ademas de todo esto encontro pasión en los instrumentos y la música, la inspiración musical mas grande que tuvo fue por el juego Dance Dance Revolution por el cuál decidió en iniciar una carrera como productor musical con el alias de 'Ekowraith',bajo ese nombre lanzo algunos tracks en sus inicios como productor musical.";
diveko.appendChild(p1home);

const ekot = document.createElement("h5");
ekot.id = "ekot";
ekot.innerText = "Ekowraith - Booming Track, horrible por cierto";
diveko.appendChild(ekot);

const ekoaudio = document.createElement("AUDIO");
ekoaudio.id = "ekoaudio";
ekoaudio.controls = true;

const source = document.createElement("source");
source.src = Ekowraith;
source.type = "audio/ogg";
ekoaudio.appendChild(source);
diveko.appendChild(ekoaudio);

const divimg = document.createElement("div");
divimg.id="divs";
divimg.className="right";

const fig1 = document.createElement("figure");
fig1.id = "fig1";
const img1 = document.createElement("img");
img1.id = "img1";
img1.setAttribute("src","../imgs/PR1.jpg");
fig1.appendChild(img1);
divimg.appendChild(fig1)
divhome.appendChild(divimg)


const divsmn = document.createElement("div");
divsmn.id = "divs";
divsmn.className="left";
divhome.appendChild(divsmn);

const p2home = document.createElement("p");
p2home.id = "p1";
p2home.innerText = "Porter nunca lanzo nada oficial con el nombre de Ekowraith ni firmo con ninguna disquera ya que la música que produjo solo la realizo con el proposito de aprender sobre producción musical y vaya que lo hizo de esa manera ya que cuando lanzo su primer sencillo en 2010 llamado 'Say my name' la gente amo su trabajo y todos empezaron a poner la vista sobre Porter.";
divsmn.appendChild(p2home);

const saym = document.createElement("h5");
saym.id = "saym";
saym.innerText = "Say My Name - Porter Robinson";
divsmn.appendChild(saym);

const smnaudio = document.createElement("AUDIO");
smnaudio.id = "smnaudio";
smnaudio.controls = true;

const source1 = document.createElement("source");
source1.src = SMN;
source1.type = "audio/ogg";
smnaudio.appendChild(source1);
divsmn.appendChild(smnaudio);

document.getElementById("body_home").appendChild(head);
document.getElementById("body_home").appendChild(divcontainer);

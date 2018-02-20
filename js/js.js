window.onload = ini();
var videoActu = 1;

function ini() {
    var ele1 = document.getElementById("ele1");
    var ele3 = document.getElementById("ele3");
    var ele5 = document.getElementById("ele5");
    var ele2 = document.getElementById("ele2");
    var ele4 = document.getElementById("ele4");
    var ele6 = document.getElementById("ele6");
    var bloqueVideo = document.getElementById("rico");

    ele1.addEventListener("click", function () {
        videoActu = 1;
        var nodo = `<video autoplay id="puesto" >
                        <source src="video/anime2.mp4" type="video/mp4"> 
                    </video>
 <div id="tiempo">

                            <span id=minutos>0</span>/<span id=total>0</span>
                        </div>`
        quitarRojo();

        ele1.setAttribute("class", "reproduciendo")

        var img = document.createElement("img")
        img.setAttribute("src", "img/play-button.svg")
        img.setAttribute("class", "iconito")
        ele1.appendChild(img)
        bloqueVideo.innerHTML = nodo;

    });

    ele3.addEventListener("click", function () {
        videoActu = 3
        var nodo = `<video autoplay id="puesto" >
                        <source src="video/anime1.mp4" type="video/mp4"> 
                    </video>
 <div id="tiempo">

                            <span id=minutos>0</span>/<span id=total>0</span>
                        </div>`
        quitarRojo();
        ele3.setAttribute("class", " reproduciendo")
        var img = document.createElement("img")
        img.setAttribute("src", "img/play-button.svg")
        img.setAttribute("class", "iconito")
        ele3.appendChild(img)
        bloqueVideo.innerHTML = nodo;
    });

    ele5.addEventListener("click", function () {
        videoActu = 5
        var nodo = `<video autoplay id="puesto" >
                        <source src="video/anime3.mp4" type="video/mp4"> 
                    </video>
 <div id="tiempo">

                            <span id=minutos>0</span>/<span id=total>0</span>
                        </div>`
        quitarRojo();
        ele5.setAttribute("class", "reproduciendo ")
        var img = document.createElement("img")
        img.setAttribute("src", "img/play-button.svg")
        img.setAttribute("class", "iconito")
        ele5.appendChild(img)
        bloqueVideo.innerHTML = nodo;

    });

    ele2.addEventListener("click", function () {
        videoActu = 2
        var nodo = ` <img  class="imga" src="https://media.giphy.com/media/IUe8OizKcekTe/giphy.gif" alt=""/>
                        <audio id="puesto" autoplay>
                        <source src="music/musica3.mp3" type="audio/mpeg">
                        Your browser does not support the <code>audio</code> tag.
                    </audio>
 <div id="tiempo">

                            <span id=minutos>0</span>/<span id=total>0</span>
                        </div>`
        quitarRojo();
        ele2.setAttribute("class", "reproduciendo ")
        var img = document.createElement("img")
        img.setAttribute("src", "img/play-button.svg")
        img.setAttribute("class", "iconito")
        ele2.appendChild(img)
        bloqueVideo.innerHTML = nodo;
    });

    ele4.addEventListener("click", function () {
        videoActu = 4
        var nodo = `  <img class="imga" src="https://media.giphy.com/media/10ll4wGeX88XrG/giphy.gif" alt=""/>
                     <audio id="puesto" autoplay>
                        <source src="music/musica2.mp3" type="audio/mpeg">
                        Your browser does not support the <code>audio</code> tag.
                    </audio>
 <div id="tiempo">

                            <span id=minutos>0</span>/<span id=total>0</span>
                        </div>`
        quitarRojo();
        ele4.setAttribute("class", "reproduciendo ")
        var img = document.createElement("img")
        img.setAttribute("src", "img/play-button.svg")
        img.setAttribute("class", "iconito")
        ele4.appendChild(img)
        bloqueVideo.innerHTML = nodo;
    });

    ele6.addEventListener("click", function () {
        videoActu = 6
        var nodo = ` <img  class="imga"src="https://media.giphy.com/media/8eoDGi20hSks8/giphy.gif" alt=""/>
                    <audio id="puesto" autoplay>
                        <source src="music/musica1.mp3" type="audio/mpeg">
                        Your browser does not support the <code>audio</code> tag.
                    </audio>
 <div id="tiempo">

                            <span id=minutos>0</span>/<span id=total>0</span>
                        </div>`
        quitarRojo();
        ele6.setAttribute("class", "reproduciendo ")
        var img = document.createElement("img")
        img.setAttribute("src", "img/play-button.svg")
        img.setAttribute("class", "iconito")
        ele6.appendChild(img)
        bloqueVideo.innerHTML = nodo;
    });
    darAtributos();




}
setInterval('pasar()', 1000);

function pasar() {
    document.getElementById("minutos").innerHTML = Math.round(document.getElementById("puesto").currentTime);
    document.getElementById("total").innerHTML = Math.round(document.getElementById("puesto").duration);
    if (document.getElementById("puesto").currentTime >= document.getElementById("puesto").duration) {
        videoActu++;
        document.getElementById("ele" + videoActu).click();
    }
}


function darAtributos() {

    document.getElementById("adelante").addEventListener("click", function () {
        document.getElementById("puesto").currentTime = document.getElementById("puesto").currentTime + 10;

    })
    document.getElementById("play").addEventListener("click", function () {
        document.getElementById("puesto").play();

    })
    document.getElementById("pausa").addEventListener("click", function () {
        document.getElementById("puesto").pause();

    })
    document.getElementById("mute").addEventListener("click", function () {

        document.getElementById("puesto").volume = 0;
        ;

    })
    document.getElementById("nomute").addEventListener("click", function () {

        document.getElementById("puesto").volume = 1;


    })



}

function quitarRojo() {
    var listah3 = document.getElementsByTagName("h3")
    var listaIc = document.getElementsByClassName("iconito")
    for (var i = 0; i < listah3.length; i++) {
        listah3[i].setAttribute("class", "hover")

    }
    for (var i = 0; i < listaIc.length; i++) {
        listaIc[i].removeAttribute("src")


    }
}
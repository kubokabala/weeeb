var nowPageMenu = document.URL.split('/').at(-1).split('.')[0];
console.log(nowPageMenu);

if(document.location.pathname=="/index.html"){
    $("#li1").addClass("selected");
    console.log("index");
};
if(document.location.pathname=="/Lab2/content2.html"){
    $("#li2").addClass("selected");
    console.log("tablica");
};

(function() {
    console.log("Hello world!")
    var now = new Date();
    startS = new Date(performance.timing.requestStart).getSeconds();
    startMS = new Date(performance.timing.requestStart).getMilliseconds();
    endS = now.getSeconds();
    endMS = now.getMilliseconds();
    res = Math.abs(endS*1000 + endMS - startS*1000 - startMS);
    console.log(endS, endMS, startS, startMS)
    var stats = document.createElement("p");
    stats.textContent = "Page load time is " + res + " ms";
    document.getElementsByTagName("footer")[0].appendChild(stats);
})();
      
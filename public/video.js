///////////////////////////////////////////////////////
// insert videos
///////////////////////////////////////////////////////
function test (){
    let test = document.querySelectorAll(".video")
    // test.innerHTML = "<iframe width='560' height='315' src='https://www.youtube.com/embed/SORExkdt3tY?start=1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
    test.forEach(element => {
        element.innerHTML = "<iframe src='https://www.youtube.com/embed/SORExkdt3tY?start=1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
    });
}
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


///////////////////////////////////////////////////////
//     check urls
///////////////////////////////////////////////////////
function getStatus(url) {
    var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (request.readyState === 4){
        request.status;//this contains the status code
        setHtml('disp', request.status);
    }
};
    request.open("GET", url, true);
    request.send(); 
} 


function setHtml(targetC, htmldata) {
console.log(htmldata);
var theDiv = document.getElementById(targetC);
theDiv.innerHTML = htmldata;
}

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


window.onload = function () {
    test();
    getStatus( 'https://www.youtube.com/watch?v=j5p87-ocDtI');
}
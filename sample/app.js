var app = {
    init: function() {
        this.doGetRequest();
        if (document.body.addEventListener)
        {
            document.body.addEventListener('click',yourHandler,false);
        }
        else
        {
            document.body.attachEvent('onclick',yourHandler);//for IE
        }

        function yourHandler(e)
        {
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (target.className.match(/anchor/))
            {
                app.displayModal();
                //an element with the keyword Class was clicked
            }
        }
    },
    doGetRequest: function() {
        var url = "https://ghibliapi.herokuapp.com/films/";
        var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              app.makeHtml(this.responseText);
            }
          };
          xhttp.open("GET", url, true);
          xhttp.send();
    },
    makeHtml: function(data) {
        var html = "";
        var data = JSON.parse(data);
        for (var i=0;i<data.length;i++){
            html+= '<div><a href="#" class="anchor" >'+data[i].title+'</a></div>';
        }
        document.getElementById("root").innerHTML = html;
    },
    displayModal: function(){
        alert("hi");
    }
}
window.onload = app.init();
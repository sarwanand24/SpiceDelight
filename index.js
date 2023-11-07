   var showname = document.getElementById("callname");
        var flagp=0;
        document.getElementById("submit").addEventListener("click", function(){
            if(showname.value == ""){
                swal({
              text: "Please Enter Your Name",
             });
            }
            else{
                localStorage.setItem("showname2", showname.value);
                console.log(showname.value);
                window.location = "menu.html";
                flagp=1;
                localStorage.setItem("flagp2", flagp);
            }
        })
        window.onload = function(){
            var flagp3 = localStorage.getItem("flagp2");
            if(flagp3 == 1){
                window.location = "menu.html";
            }
        }

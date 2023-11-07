        var count = 1;
        var total = document.getElementById("total");
        total.innerHTML = 60;
        const inc1 = document.getElementById("inc1");
        const dec1 = document.getElementById("dec1");
        const noi1 = document.getElementById("no-of-item1");
        var total1 = 0;
        noi1.innerHTML = count;

        const handleIncrement = () => {
        count++;
        total1 = 60*count;
        noi1.innerHTML = count;
        total.innerHTML = total1 + total2;
    }
    
    const handleDecrement = () => {
    if(count>1)
        count--;
        total1 = 60*count;
    noi1.innerHTML = count;
    total.innerHTML = total1 + total2;
    }

        inc1.addEventListener("click", handleIncrement);
        dec1.addEventListener("click", handleDecrement);

        const inc2 = document.getElementById("inc2");
        const dec2 = document.getElementById("dec2");
        const noi2 = document.getElementById("no-of-item2");
        var total2 = 0;
        var count2 = 0;
        noi2.innerHTML = count2;

        const handleIncrement2 = () => {
        count2++;
        total2 = 6*count2;
        noi2.innerHTML = count2;
        total.innerHTML = total1 + total2;
    }
    
    const handleDecrement2 = () => {
    if(count2>0)
        count2--;
        total2 = 6*count2;
    noi2.innerHTML = count2;
    total.innerHTML = total1 + total2;
    }

        inc2.addEventListener("click", handleIncrement2);
        dec2.addEventListener("click", handleDecrement2);

        document.getElementById("btn").addEventListener("click", function(){
            var amount = document.getElementById("total").innerText;
            console.log(amount);
            sessionStorage.setItem("amount1", amount);
            window.location = "orderpage.html";
        })

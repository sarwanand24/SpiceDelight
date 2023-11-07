     var count = 0;
        var total = document.getElementById("total");
        const inc1 = document.getElementById("inc1");
        const dec1 = document.getElementById("dec1");
        const noi1 = document.getElementById("no-of-item1");
        var total1 = 0;
        noi1.innerHTML = count;

        const handleIncrement = () => {
        count++;
        total1 = 80*count;
        noi1.innerHTML = count;
        total.innerHTML = total1 + total2 + total3 + total4 + total5;
    }
    
    const handleDecrement = () => {
    if(count>0)
        count--;
        total1 = 80*count;
    noi1.innerHTML = count;
    total.innerHTML = total1 + total2 + total3 + total4 + total5;
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
        total2 = 130*count2;
        noi2.innerHTML = count2;
        total.innerHTML = total1 + total2 + total3 + total4 + total5;
    }
    
    const handleDecrement2 = () => {
    if(count2>0)
        count2--;
        total2 = 130*count2;
    noi2.innerHTML = count2;
    total.innerHTML = total1 + total2 + total3 + total4 + total5;
    }

        inc2.addEventListener("click", handleIncrement2);
        dec2.addEventListener("click", handleDecrement2);

        const inc3 = document.getElementById("inc3");
        const dec3 = document.getElementById("dec3");
        const noi3 = document.getElementById("no-of-item3");
        var total3 = 0;
        var count3 = 0;
        noi3.innerHTML = count3;

        const handleIncrement3 = () => {
        count3++;
        total3 = 95*count3;
        noi3.innerHTML = count3;
        total.innerHTML = total1 + total2 + total3 + total4 + total5;
    }
    
    const handleDecrement3 = () => {
    if(count3>0)
        count3--;
        total3 = 95*count3;
    noi3.innerHTML = count3;
    total.innerHTML = total1 + total2 + total3 + total4 + total5;
    }

        inc3.addEventListener("click", handleIncrement3);
        dec3.addEventListener("click", handleDecrement3);

        
        const inc4 = document.getElementById("inc4");
        const dec4 = document.getElementById("dec4");
        const noi4 = document.getElementById("no-of-item4");
        var total4 = 0;
        var count4 = 0;
        noi4.innerHTML = count4;

        const handleIncrement4 = () => {
        count4++;
        total4 = 60*count4;
        noi4.innerHTML = count4;
        total.innerHTML = total1 + total2 + total3 + total4 + total5;
    }
    
    const handleDecrement4 = () => {
    if(count4>0)
        count4--;
        total4 = 60*count4;
    noi4.innerHTML = count4;
    total.innerHTML = total1 + total2 + total3 + total4 + total5;
    }

        inc4.addEventListener("click", handleIncrement4);
        dec4.addEventListener("click", handleDecrement4);

        
        const inc5 = document.getElementById("inc5");
        const dec5 = document.getElementById("dec5");
        const noi5 = document.getElementById("no-of-item5");
        var total5 = 0;
        var count5 = 0;
        noi5.innerHTML = count5;

        const handleIncrement5 = () => {
        count5++;
        total5 = 50*count5;
        noi5.innerHTML = count5;
        total.innerHTML = total1 + total2 + total3 + total4 + total5;
    }
    
    const handleDecrement5 = () => {
    if(count5>0)
        count5--;
        total5 = 50*count5;
    noi5.innerHTML = count5;
    total.innerHTML = total1 + total2 + total3 + total4 + total5;
    }

        inc5.addEventListener("click", handleIncrement5);
        dec5.addEventListener("click", handleDecrement5);

        document.getElementById("btn").addEventListener("click", function(){
            var amount = document.getElementById("total").innerText;
            console.log(amount);
            sessionStorage.setItem("amount1", amount);
            window.location = "orderpage.html";
        })

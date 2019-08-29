



    document.querySelector("body").addEventListener("keyup", function(event) {
        
        document.querySelector(".red").innerHTML = document.getElementById("message").value;
        document.querySelector(".blue").innerHTML = document.getElementById("message").value;
        console.log(document.getElementById("message").value);
    })

    /*

    document.getElementById("MyElement").classList.add('MyClass');

document.getElementById("MyElement").classList.remove('MyClass');

if ( document.getElementById("MyElement").classList.contains('MyClass') )

document.getElementById("MyElement").classList.toggle('MyClass');

    */



let button = document.getElementById("mybtn");

button.addEventListener("click",function(){
    let name = document.getElementById("nametext").value;

    document.getElementById("result").innerText = name;
});


// function heynik(){
//     console.log("how are you")
// };

// heynik()
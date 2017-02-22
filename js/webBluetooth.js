document.getElementById("GetBeacons").addEventListener("click",function(){
    if(navigator.bluetooth){
        console.log("Bluetooth found");
    }
    else{
        console.log("No Bluetooth present");
    }
})
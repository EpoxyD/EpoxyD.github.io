document.getElementById("GetBeacons").addEventListener("click",function(){
    if(navigator.bluetooth){
        console.log("Bluetooth found");
        //navigator.bluetooth.requestDevice({ filters: [{ name: 'RECO' }] });
        navigator.bluetooth.requestLEScan({
          filters: [{manufacturerData: 0x004C}],
        })
    }
    else{
        console.log("No Bluetooth present");
    }
})


//24DDF411-8CF1-440C-87CD-E368DAF9C93E
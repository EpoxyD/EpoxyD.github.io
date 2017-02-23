document.getElementById("GetBeacons").addEventListener("click",function(){
    if(navigator.bluetooth){
        console.log("Bluetooth found");
        
        navigator.bluetooth.requestDevice({ filters: [{ name: 'RECO' }] });
        //navigator.bluetooth.requestLEScan({
        //  options: {acceptAllAdvertisements: true,}
        //})
        
        //navigator.bluetooth.requestLEScan({options:{acceptAllAdvertisements: true,}});
    }
    else{
        console.log("No Bluetooth present");
    }
})


//UUID Reco Beacon : 24DDF411-8CF1-440C-87CD-E368DAF9C93E
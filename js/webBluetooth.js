document.getElementById("GetBeacons").addEventListener("click",function(){
    if(navigator.bluetooth){
        console.log("Bluetooth found");        }
        navigator.bluetooth.requestDevice(filters: [
                {services: ['24DDF411-8CF1-440C-87CD-E368DAF9C93E']}
            ]).then(function(device){
            console.log('Name: ' + device.name);
        })
    }
    else{
        console.log("No Bluetooth present");
    }
})
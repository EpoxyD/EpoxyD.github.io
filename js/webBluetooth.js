document.getElementById("GetBeacons").addEventListener("click",function(){
    if(navigator.bluetooth){
        console.log("Bluetooth found");
        let options = {
            filters: [
                {services: ['24DDF411-8CF1-440C-87CD-E368DAF9C93E']}
            ]
        }
        navigator.bluetooth.requestDevice(options).then(function(device){
            console.log('Name: ' + device.name);
        })
    }
    else{
        console.log("No Bluetooth present");
    }
})
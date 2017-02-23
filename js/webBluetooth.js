document.getElementById("GetBeacons").addEventListener("click", function () {
    navigator.permissions.query({
        name: "geolocation"
    }).then(({
        state
    }) => {
        switch (state) {
        case "granted":
            console.log("granted location access")
            break;
        case "prompt":
            console.log("prompted location access")
            break;
        default:
            console.log("denied location access")
            break;
        }
    })

    if (navigator.bluetooth) {
        console.log("Bluetooth found");
    } else {
        console.log("No Bluetooth present");
    }
})


//UUID Reco Beacon : 24DDF411-8CF1-440C-87CD-E368DAF9C93E
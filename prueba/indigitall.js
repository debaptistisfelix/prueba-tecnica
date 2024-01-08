export function initializeIndigitall() {
    function onNewUserRegistered(device){
      console.log("Device onNewUserRegistered: ",device)
    }
  
    function onIndigitallInitialized(permissions,device){
      console.log("Push Permission: ",permissions.push)
      console.log("Location Permission: ",permissions.location)
      console.log("Device: ", device)
    }
  
    function onLocationUpdated(location){}
  
    function onError(error){
      console.log(error);
    }
  
    function requestPushPermission(permission){}
  
    function requestLocationPermission(permission){}
  
    indigitall.init({
      appKey:'94cb9c3e-0749-450f-8445-49bf2b269d8a',
      workerPath:'./indigitall/worker.min.js',
      requestLocation: true,
      onInitialized: onIndigitallInitialized,
      requestPushPermission: requestPushPermission,
      onNewUserRegistered: onNewUserRegistered,
      requestLocationPermission: requestLocationPermission,
      onLocationUpdated: onLocationUpdated,
      onError: onError            
    });
  }
// Make sure sw are supported
export default function swDev(){
   
  
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`
if (!navigator.serviceWorker) return;

  navigator.serviceWorker
    .register(swUrl)
    .then(function () {
      console.log("Service Worker Registered");
    })
    .catch(function () {
      console.log("Registration Failed");
    });
  

}
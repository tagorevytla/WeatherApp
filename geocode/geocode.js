const request = require('request');

 var geocodeAddress = (address,callback) => {

   var encodedAddress = encodeURIComponent(address);

   request({
     url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
     json: true
   }, (error, response, body) => {
     if(error) {
       callback('unable to connect to google servers');
     }else if(body.status === 'ZERO_RESULTS'){
       callback('Unable to find this address');
     }else if(body.status === 'OK'){
        callback(undefined, {
          address:body.results[0].formatted_address,
          Latitude:body.results[0].geometry.location.lat,
          Longitude:body.results[0].geometry.location.lng
        });
   }
   });
 };

 //90a0cdea63054754d181a3fa9f4bc461

 module.exports.geocodeAddress = geocodeAddress;

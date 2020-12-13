console.log('this is my script');


mapboxgl.accessToken = 'pk.eyJ1IjoiY29kZXJ4MTkiLCJhIjoiY2tpbjFvamR6MDRsdjJ5b3lwZmF2NGU2byJ9.rC976sJhgJiw5zfAgIOzNg';
  

const successLocation=(position)=>{
    console.log(position);
    setupMap([position.coords.longitude,position.coords.latitude])
    
}

const errorLocation=()=>{
    setupMap([-2.34,53.48]);
}

const setupMap=(center)=>{
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center:center,
        zoom:15
      });

      const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);


  var directions = new MapboxDirections({
    accessToken: 'pk.eyJ1IjoiY29kZXJ4MTkiLCJhIjoiY2tpbjFvamR6MDRsdjJ5b3lwZmF2NGU2byJ9.rC976sJhgJiw5zfAgIOzNg',
   
  });
  

  
  map.addControl(directions, 'top-left');
}

  navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{enableHighAccuracy:true})


  

 


 
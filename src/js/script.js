import '../scss/main.scss'

window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  const menu = document.querySelector('.menu');
  const menuList = document.querySelector('.menu__list');
  const hamburger = document.querySelector('.hamburger');

  menu.addEventListener('click', (event) => {
    if (event.target) {
      menuList.classList.toggle('menu__list--active');

      if (event.target.matches('.hamburger--active')) {
        menuList.classList.add('menu__list--fade');
        const fading = () => menuList.classList.remove('menu__list--fade');
        setTimeout(fading, 500);
      }
      hamburger.classList.toggle('hamburger--active');
    }
  });





  mapboxgl.accessToken = 'pk.eyJ1IjoiYnJhamtlIiwiYSI6ImNrN3E3ZjJsbTAwcDYzZXBlYXVkZzAyZnoifQ.r7qYlDmBPxnSfl0ZNCEOxg';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/brajke/ck7q9v75q06e61ioyq44okhfd'
  });


  var geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-118.1892666, 33.7765453]
        },
        properties: {
          title: 'Mapbox',
          description: 'San Francisco, California'
        }
      }]
  };
  // add markers to map
  geojson.features.forEach(function(marker) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);
  });
});
import React, { useEffect } from 'react';
import './NaverMap.scss';

const NaverMap = ({ onCreate, onIdle }) => {
  useEffect(() => {
    const naver = window.naver;

    const mapOptions = {
      center: new window.naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10
    };
    
    const map = new window.naver.maps.Map('map', mapOptions);

    naver.maps.Event.addListener(map, 'idle', function(e) {
      onIdle(map);
    });

    onCreate(map);
  }, [ ]);

  return <div id="map" style={{width: '100%', height: '100vh'}}></div>
}

export default NaverMap;
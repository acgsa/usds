import React from "react";

const USFlagIcon = () => (
  <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true">
    <rect width="19" height="13" fill="url(#pattern0_7_5232)"/>
    <defs>
      <pattern id="pattern0_7_5232" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_7_5232" transform="matrix(0.015625 0 0 0.0228365 0 -0.00240385)"/>
      </pattern>
      <image id="image0_7_5232" width="64" height="44" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAsBAMAAAAncaPMAAAAAXNSR0IArs4c6QAAABtQTFRF////4EAg2z8g2z8f2z4f2j4fHjSyHjOxHTOxQEYPwgAAAIdJREFUeNrNkUENxDAMBEOhFJaCKZiCKZhCKBj2ebV3rdR71+pIq+Qxj1GyqjJ3U8VlHkc07hFm0awBYe91juq6MSI0yhSAEgkzJ4TMKiXyzFw3pgR9lmIBJlqj2AmBedf+IycExmlKZVzvZEJ4A0oBrjBl/m6PCy95B3fFAN6YuQPxhbcB4QMkEj04wQXD5wAAAABJRU5ErkJggg=="/>
    </defs>
  </svg>
);

export function USGRibbon() {
  return (
    <div className="usg-ribbon">
      <div className="usg-ribbon-content">
        <USFlagIcon />
        <span className="usg-ribbon-text">An official website of the United States Government</span>
      </div>
    </div>
  );
}

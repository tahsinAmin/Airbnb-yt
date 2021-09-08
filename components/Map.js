import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl'; // https://visgl.github.io/react-map-gl/docs/get-started/get-started
import getCenter from 'geolib/es/getCenter';

function Map({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = useState({})
    // https://studio.mapbox.com/

    // Transform the search results object ibto the 
    // {latitude 52.2345, longitude: 56.987}
    //  object
    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat,
    }));

    // console.log(coordinates);

    // The latitude and longitude of the center of locations coordinates
    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    });

    return (
        <ReactMapGL
         mapStyle='mapbox://styles/tahsinam/ckt7b8i8g27v817nsiv90eu89'
         mapboxApiAccessToken={process.env.mapbox_key}
         {...viewport}
         onViewportChange = {(nextViewport) => setViewport(nextViewport)}
        >
            {searchResults.map(result => (
             <div key={result.long}>
                <Marker
                  longitude={result.long}
                  latitude={result.lat}
                  offsetLeft={-20}
                  offsetTop={-10}
                >
                    <p
                     onClick={() => setSelectedLocation(result)}
                     className="cursor-pointer text-2xl animate-bounce"
                     aria-label='push-pin'
                     role='img'
                    >📌</p>
                </Marker>

                {/* The popups that should show if we click on a Marker */}
                {selectedLocation.long == result.long ? (
                    <Popup
                      onClose={() => setSelectedLocation({})}
                      closeOnClick={true}
                      latitude={result.lat}
                      longitude={result.long}
                    >
                        {result.title}
                    </Popup>
                ) : (false) }
             </div>
         ))}
        </ReactMapGL>
    )
}

export default Map

// npm install geolib
// https://github.com/manuelbieh/geolib

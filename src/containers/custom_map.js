import React from "react";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker
} from "react-google-maps";

const MyMapComponent = withScriptjs(
	withGoogleMap(props => (
		<GoogleMap
			defaultZoom={8}
			defaultCenter={{ lat: props.lat, lng: props.lng }}
		>
			{props.isMarkerShown && (
				<Marker position={{ lat: props.lat, lng: props.lng }} />
			)}
		</GoogleMap>
	))
);

// <MyMapComponent isMarkerShown />// Map with a Marker
export default MyMapComponent;

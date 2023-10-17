import { type NextPage } from "next";
import Map, { type MapRef, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useMqtt } from "~/utils/hooks/useMqtt";
import {
  type FunctionComponent,
  type RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { type Marker as MarkerRef } from "mapbox-gl";
import { type MqttClient } from "mqtt/*";

type DashboardProps = Record<never, string>;

const Dashboard: NextPage<DashboardProps> = ({}) => {
  const map = useRef<MapRef>(null);

  const { connection, openConnection } = useMqtt();

  useEffect(() => {
    if (connection == null) return;

    connection.on("close", () => {
      openConnection();
      console.log("close");
    });

    return () => {
      connection.removeAllListeners();
    };
  }, [connection, openConnection]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Map
        mapboxAccessToken="pk.eyJ1IjoiZXl1YjIwMDEiLCJhIjoiY2xpeDYydThxMDR3YzNzcW10cjNoeXI2dSJ9.S8sjCUJxSfbzIbOj-7vWNA"
        accessToken="pk.eyJ1IjoiZXl1YjIwMDEiLCJhIjoiY2xpeDYydThxMDR3YzNzcW10cjNoeXI2dSJ9.S8sjCUJxSfbzIbOj-7vWNA"
        initialViewState={{
          latitude: 41.112794,
          longitude: 29.01834,
          zoom: 8,
        }}
        mapStyle="mapbox://styles/eyub2001/clk2pmr3g00g301pf23265zbw"
        style={{ width: "80vw", height: "90vh" }}
        ref={map}
      >
        <CustomMarker map={map} mqttClient={connection} />
      </Map>
    </div>
  );
};

interface CustomMarkerProps {
  map: RefObject<MapRef>;
  mqttClient: MqttClient | null;
}

const CustomMarker: FunctionComponent<CustomMarkerProps> = ({
  map,
  mqttClient,
}) => {
  const [currentLocation, setCurrentLocation] = useState({
    lat: 41.112794,
    lng: 29.01834,
  });

  const marker = useRef<MarkerRef>(null);
  const start = useRef<number>(0);

  const prevLocation = useRef<{ lat: number; lng: number }>({
    lat: 41.112794,
    lng: 29.01834,
  });
  const prevCenter = useRef<{ lat: number; lng: number }>({
    lat: 41.112794,
    lng: 29.01834,
  });

  const mqttGpsCallback = useCallback(
    (payload: string) => {
      const gpsPayload = JSON.parse(payload) as {
        lat: string;
        lng: string;
        carId: string;
      };

      console.log(gpsPayload);

      start.current = performance.now();
      prevLocation.current = currentLocation;
      prevCenter.current = map.current?.getCenter() ?? currentLocation;

      setCurrentLocation({
        lat: parseFloat(gpsPayload.lat),
        lng: parseFloat(gpsPayload.lng),
      });
    },
    [setCurrentLocation, currentLocation, map],
  );

  const mqttCallback = useCallback(
    (topic: string, payload: Buffer) => {
      if (topic.includes("gps")) {
        mqttGpsCallback(payload.toString());
      }
    },
    [mqttGpsCallback],
  );

  const setLocation = useCallback(
    (timestamp: number) => {
      const elapsed = timestamp - start.current;
      const progress = elapsed / 1000;

      const goalLat = currentLocation.lat - prevLocation.current.lat;
      const goalLng = currentLocation.lng - prevLocation.current.lng;

      const centerGoalLat = currentLocation.lat - prevCenter.current.lat;
      const centerGoalLng = currentLocation.lng - prevCenter.current.lng;

      if (elapsed > 1000) return;

      marker.current?.setLngLat([
        prevLocation.current.lng + goalLng * progress,
        prevLocation.current.lat + goalLat * progress,
      ]);
      map.current?.setCenter([
        prevCenter.current.lng + centerGoalLng * progress,
        prevCenter.current.lat + centerGoalLat * progress,
      ]);
      requestAnimationFrame(setLocation);
    },
    [currentLocation, map],
  );

  useEffect(() => {
    if (marker.current == null) return;

    setLocation(performance.now());
  }, [marker, currentLocation, setLocation]);

  useEffect(() => {
    if (mqttClient) {
      mqttClient
        .subscribe("car-info/4876ccd3-d404-4cfb-a1c9-c7d69fd23a11/gps")
        .on("message", mqttCallback);

      return () => {
        mqttClient.unsubscribe(
          "car-info/4876ccd3-d404-4cfb-a1c9-c7d69fd23a11/gps",
        );
        mqttClient.removeListener("message", mqttCallback);
      };
    }
  }, [mqttClient, mqttCallback]);

  return (
    <Marker
      ref={marker}
      latitude={currentLocation.lat}
      longitude={currentLocation.lng}
    />
  );
};

export default Dashboard;

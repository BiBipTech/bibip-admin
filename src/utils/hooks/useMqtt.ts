import * as mqtt from "mqtt";
import { useEffect, useMemo, useState } from "react";

export const useMqtt = () => {
  const [client, setClient] = useState<mqtt.MqttClient | null>(null);

  const options: mqtt.IClientOptions = useMemo(
    () => ({
      keepalive: 0,
      clientId: `AdminPanel-1`,
      protocolId: "MQTT",
      protocolVersion: 4,
      clean: true,
      reconnectPeriod: 300 * 1000,
      connectTimeout: 30 * 1000,
      ALPNProtocols: ["mqtt"],
      username: "asd",
      password: "asd",
      will: {
        topic: "WillMsg",
        payload: Buffer.from("Connection Closed abnormally..!", "utf-8"),
        qos: 0,
        retain: false,
      },
    }),
    [],
  );

  useEffect(() => {
    console.log("connection");
    const cli = mqtt.connect(
      "wss://aoml15kr7jz1o-ats.iot.eu-central-1.amazonaws.com:443/mqtt",
      options,
    );
    setClient(cli);
  }, [options]);

  const openConnection = () => {
    const cli = mqtt.connect(
      "wss://aoml15kr7jz1o-ats.iot.eu-central-1.amazonaws.com:443/mqtt",
      options,
    );

    setClient(cli);
  };
  return {
    connection: client,
    openConnection,
  };
};

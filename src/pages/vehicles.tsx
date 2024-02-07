import { type NextPage } from "next";
import { useState } from "react";
import List from "~/components/list/List";
import VehicleTile from "~/components/list/tiles/VehicleTile";
import CarTileSkeleton from "~/components/skeletons/CarTileSkeleton";
import { api } from "~/utils/api";
import { useMqtt } from "~/utils/hooks/useMqtt";

type VehiclesProps = Record<never, string>;

const Vehicles: NextPage<VehiclesProps> = ({}) => {
  const {
    data: cars,
    isLoading: carsLoading,
    isFetched: carsFetched,
    refetch: refetchCars,
  } = api.vehicle.listBiBipCars.useQuery(undefined, {
    refetchOnWindowFocus: false,
  });

  const isLoading = carsLoading;

  const [connected] = useState(false);

  const { connection } = useMqtt();

  // useEffect(() => {
  //   if (connection == null) {
  //     setConnected(false);
  //     return;
  //   }

  //   connection.on("connect", () => {
  //     setConnected(true);
  //     console.log("connected");
  //   });

  //   connection.on("close", () => {
  //     openConnection();
  //     console.log("close");
  //   });

  //   return () => {
  //     connection.removeAllListeners();
  //   };
  // }, [connection, openConnection]);

  if (isLoading)
    return (
      <div className="h-full w-full rounded-md bg-white">
        <div className="shadow-eq-md h-full w-full rounded-md border border-gray-300 bg-white px-8 py-12">
          <p className="mb-4 text-xl font-semibold">Araçlar</p>
          <CarTileSkeleton />
          <CarTileSkeleton />
          <CarTileSkeleton />
          <CarTileSkeleton />
        </div>
      </div>
    );

  return (
    <div className="h-full w-full rounded-md bg-white">
      <div className="shadow-eq-md h-full w-full rounded-md border border-gray-300 bg-white px-8 py-12">
        <p className="text-xl font-semibold">Araçlar</p>
        {carsFetched && (
          <List
            elements={cars ?? []}
            headers={[
              "Müsaitlik",
              "Kart Durumu",
              "Araç",
              "Yakıt Durumu",
              "Actions",
            ]}
            elementMapper={(car) => (
              <VehicleTile
                car={car}
                key={car.id}
                refetchCars={refetchCars}
                lock={() => {
                  if (connected) {
                    connection?.publish(
                      `car-info/${car.id}`,
                      JSON.stringify({
                        lock: "true",
                      }),
                    );
                  }
                }}
                unlock={() => {
                  if (connected) {
                    connection?.publish(
                      `car-info/${car.id}`,
                      JSON.stringify({
                        lock: "false",
                      }),
                    );
                  }
                }}
              />
            )}
          />
        )}
      </div>
    </div>
  );
};

export default Vehicles;

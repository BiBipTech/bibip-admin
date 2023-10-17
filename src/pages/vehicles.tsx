import { type NextPage } from "next";
import GenericActionButton from "~/components/buttons/GenericActionButton";
import List from "~/components/list/List";
import VehicleTile from "~/components/list/tiles/VehicleTile";
import CarTileSkeleton from "~/components/skeletons/CarTileSkeleton";
import { api } from "~/utils/api";

type VehiclesProps = Record<never, string>;

const Vehicles: NextPage<VehiclesProps> = ({}) => {
  const {
    data: cars,
    isLoading: carsLoading,
    isFetched: carsFetched,
    refetch: refetchCars,
  } = api.vehicle.listBiBipCars.useQuery(undefined, {
    refetchOnWindowFocus: true,
  });

  const isLoading = carsLoading;

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
        <div className="mt-2 flex flex-row gap-2">
          {/* <SelectInput
              items={[
                { value: CarModel.MEGAN, label: "Megane" },
                { value: CarModel.PASSAT, label: "Passat" },
              ]}
              onChange={(e) => {
                setModelFilter(
                  e.map(
                    (x) =>
                      (
                        x as unknown as {
                          value: keyof typeof CarModel;
                          label: string;
                        }
                      ).value
                  )
                );
              }}
              placeholder="Model Seçiniz"
              selectedItem={{ label: "", value: "" }}
              name="selectedModel"
            />
            <SelectInput
              items={[
                { value: Car_status.FINISHED, label: "Müsait" },
                { value: Car_status.IN_PROGRESS, label: "Kullanımda" },
              ]}
              onChange={(e) =>
                setAvailabilityFilter(
                  e.map(
                    (x) =>
                      (
                        x as unknown as {
                          value: keyof typeof Car_status;
                          label: string;
                        }
                      ).value
                  )
                )
              }
              placeholder="Müsaitlik Durumu"
              selectedItem={{ label: "", value: "" }}
              name="selectedAvailability"
            /> */}
          <GenericActionButton
            // className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            action={() => {
              // applyFilters().then(undefined).catch(undefined);
            }}
            text="Uygula"
          />
        </div>
        {carsFetched && (
          <List
            elements={cars ?? []}
            headers={["Müsaitlik", "Araç", "Yakıt Durumu"]}
            elementMapper={(car) => (
              <VehicleTile car={car} key={car.id} refetchCars={refetchCars} />
            )}
          />
        )}
      </div>
    </div>
  );
};

export default Vehicles;

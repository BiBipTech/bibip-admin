import { type NextPage } from "next";
import Image from "next/image";
import { type FunctionComponent } from "react";
import GenericActionIconButton from "~/components/buttons/GenericActionIconButton";
import { api } from "~/utils/api";
import { getAvatar } from "~/utils/api/avatar";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import NavButton from "~/components/buttons/NavButton";

const Documents: NextPage = () => {
  const {
    data: users,
    isFetched: usersLoaded,
    isLoading: usersWaiting,
  } = api.users.getWaitingDocuments.useQuery(undefined, {
    cacheTime: 300000,
  });

  // useLoader([usersWaiting]);

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {usersLoaded &&
        users?.map((user) => (
          <UserCard
            key={user.Username}
            name={
              user.Attributes.filter((a) => a.Name === "name")[0]?.Value ?? ""
            }
            id_confirmed={
              user.Attributes.filter((a) => a.Name === "custom:id_confirmed")[0]
                ?.Value ?? ""
            }
            license_confirmed={
              user.Attributes.filter(
                (a) => a.Name === "custom:license_confirmed",
              )[0]?.Value ?? ""
            }
            photo_confirmed={
              user.Attributes.filter(
                (a) => a.Name === "custom:photo_confirmed",
              )[0]?.Value ?? ""
            }
            username={user.Username}
          />
        ))}
      {usersWaiting && (
        <div className="col-span-4 grid grid-cols-4 gap-4">
          {[...Array(10).keys()].map((_, i) => (
            <UserCardSkeleton key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

interface UserCardProps {
  name: string;
  id_confirmed: string;
  photo_confirmed: string;
  license_confirmed: string;
  username: string;
}

const UserCard: FunctionComponent<UserCardProps> = ({
  name,
  id_confirmed,
  username,
}) => {
  return (
    <div className="flex flex-col items-center gap-y-2 rounded-lg bg-white p-4 shadow-md">
      <Image
        className="rounded-full"
        src={getAvatar(name)}
        width={75}
        height={75}
        alt="profile_photo"
      />
      <p className="font-sans">{name}</p>
      <div className="flex w-full justify-between gap-x-1">
        <div className="flex gap-x-2">
          <p className="p-1">ID: </p>
          <div className="rounded-lg bg-yellow-200 px-2 py-1 text-yellow-600">
            {id_confirmed}
          </div>
        </div>
        <div className="flex justify-end gap-x-2">
          <NavButton
            active
            href={`/${username}/id`}
            name="Show"
            Icon={AiOutlineCheck}
          />
          <GenericActionIconButton
            action={() => undefined}
            Icon={AiOutlineCheck}
            className="p-1"
          />
          <GenericActionIconButton
            action={() => undefined}
            Icon={AiOutlineClose}
            className="p-1"
          />
        </div>
      </div>
    </div>
  );
};

const UserCardSkeleton = () => {
  return (
    <div className="col-span-1 h-96 animate-pulse rounded-lg bg-gray-400"></div>
  );
};

export default Documents;

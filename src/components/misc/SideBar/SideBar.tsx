import { useState, type FunctionComponent } from "react";
import SessionButton from "../../buttons/LogoutButton";
import NavButton from "../../buttons/NavButton";
import { MdSpaceDashboard } from "react-icons/md";
import {
  FaUsers,
  FaCar,
  FaFlag,
  FaCalendar,
  FaInfoCircle,
} from "react-icons/fa";
import { IoDocumentText, IoDocumentTextOutline } from "react-icons/io5";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { Paths } from "./Sidebar.types";
import Image from "next/image";
import { AiOutlineHistory } from "react-icons/ai";
import { signOut, useSession } from "next-auth/react";
import { useLoader } from "~/utils/hooks/useLoader";

interface SideBarProps {
  showSidebar: boolean;
  children: React.ReactNode;
}

const SideBar: FunctionComponent<SideBarProps> = (props: SideBarProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const { status } = useSession();
  const isSignedIn = status === "authenticated";

  useLoader([isLoading]);

  return (
    <div className="flex h-screen overflow-x-hidden bg-gray-200">
      <aside
        className={`sticky top-0 flex h-screen w-64 flex-shrink-0 flex-col bg-gray-50 transition-all duration-300 ${
          !props.showSidebar ? "-ml-64" : ""
        }`}
      >
        <nav className="group sticky flex flex-1 flex-col bg-gray-900 p-4">
          <div className="flex flex-row justify-center px-8 pb-4">
            <Image
              priority
              src={"/logosvg.png"}
              alt="logo"
              className="w-2/3 cursor-pointer"
              width={1920}
              height={1080}
              onClick={() => {
                router
                  .push("/dashboard")
                  .then(() => undefined)
                  .catch(() => undefined);
              }}
            />
          </div>
          <div className="px-2 pb-1">
            <NavButton
              to={Paths.Dashboard}
              name="Dashboard"
              Icon={MdSpaceDashboard}
              active={router.pathname.includes(Paths.Dashboard)}
            />
          </div>
          <div className="px-2 pb-1">
            <NavButton
              to={Paths.Documents}
              name="Belgeler"
              Icon={IoDocumentText}
              active={router.pathname.includes(Paths.Documents)}
            />
          </div>
          <div className="px-2 pb-1">
            <NavButton
              to={Paths.Users}
              name="Sürücüler"
              Icon={FaUsers}
              active={router.pathname.includes(Paths.Users)}
            />
          </div>
          <div className="px-2 pb-1">
            <NavButton
              to={Paths.Reservations}
              name="Rezervasyonlar"
              Icon={BsFillBookmarkCheckFill}
              active={router.pathname.includes(Paths.Reservations)}
            />
          </div>

          <div className="px-2 pb-1">
            <NavButton
              to={Paths.Vehicles}
              name="Araçlar"
              Icon={FaCar}
              active={router.pathname.includes(Paths.Vehicles)}
            />
          </div>
          <div className="px-2 pb-1">
            <NavButton
              to={Paths.Missions}
              name="Görevler"
              Icon={FaFlag}
              active={router.pathname.includes(Paths.Missions)}
            />
          </div>
          <div className="px-2 pb-1">
            <NavButton
              to={Paths.Calendar}
              name="Takvim"
              Icon={FaCalendar}
              active={router.pathname.includes(Paths.Calendar)}
            />
          </div>
          <div className="px-2 pb-1">
            <NavButton
              to={Paths.CarInfo}
              name="Araç Bilgileri"
              Icon={FaInfoCircle}
              active={router.pathname.includes(Paths.CarInfo)}
            />
          </div>
          <div className="px-2 pb-1">
            <NavButton
              to={Paths.PastMissions}
              name="Geçmiş Görevler"
              Icon={AiOutlineHistory}
              active={router.pathname.includes(Paths.PastMissions)}
            />
          </div>

          <div className="flex flex-grow flex-col justify-end px-2 py-1">
            {isSignedIn ? (
              <SessionButton
                onClick={() => {
                  setIsLoading(true);
                  void signOut();
                }}
                sessionType="Logout"
              />
            ) : (
              <SessionButton
                onClick={() => {
                  router
                    .push("/sign-in")
                    .then(() => undefined)
                    .catch(() => undefined);
                }}
                sessionType="Login"
              />
            )}
          </div>
        </nav>
      </aside>
      <div className="flex-1">
        <main className="flex-1">{props.children}</main>
      </div>
    </div>
  );
};

export default SideBar;

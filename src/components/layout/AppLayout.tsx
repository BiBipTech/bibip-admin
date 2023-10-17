import { type FunctionComponent } from "react";
import SpinnerOverlay from "../misc/Spinner/SpinnerOverlay";
import { signIn, useSession } from "next-auth/react";
import SideBar from "../misc/SideBar/SideBar";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: FunctionComponent<AppLayoutProps> = ({
  children,
}: AppLayoutProps) => {
  const { status } = useSession();

  if (status === "loading")
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <SpinnerOverlay />
      </div>
    );

  if (status === "unauthenticated") {
    void signIn();
    return;
  }

  return (
    <div>
      <SideBar showSidebar={true}>{children}</SideBar>
    </div>
  );
};

export default AppLayout;

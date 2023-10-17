import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { LoaderContext } from "~/utils/contexts/LoaderContext";
import { useState } from "react";
import SpinnerOverlay from "~/components/misc/Spinner/SpinnerOverlay";
import AppLayout from "~/components/layout/AppLayout";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <SessionProvider session={session}>
      <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
        {isLoading && <SpinnerOverlay />}
        <AppLayout>
          <main className="">
            <Component {...pageProps} />
          </main>
        </AppLayout>
        {/* <ToastContainer /> */}
      </LoaderContext.Provider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);

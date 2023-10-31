import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { LoaderContext } from "~/utils/contexts/LoaderContext";
import { useState } from "react";
import SpinnerOverlay from "~/components/misc/Spinner/SpinnerOverlay";
import AppLayout from "~/components/layout/AppLayout";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <SessionProvider session={session}>
      <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
        {isLoading && <SpinnerOverlay />}
        <main className={`${inter.variable} font-sans`}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </main>
        {/* <ToastContainer /> */}
      </LoaderContext.Provider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);

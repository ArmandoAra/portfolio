
import { useAppSelector } from "../../store";
import "../../App.css";
import SidebarContainer from "../../components/sideBar/SidebarContainer";

import { Providers } from "../../store/Providers";
import { useEffect } from "react";
import i18n from 'i18next';
import '../../i18n'

function AppWrapper({ children }: { children: React.ReactNode }) {
  const { lang } = useAppSelector((state) => state.language);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return children;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <Providers>
      <SidebarContainer >
        <AppWrapper>
          {children}
        </AppWrapper>
      </SidebarContainer>
    </Providers>
  );
}

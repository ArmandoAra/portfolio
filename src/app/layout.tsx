import "../App.css";
import SidebarContainer from "../components/sideBar/SidebarContainer";

import { Providers } from "../store/Providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <SidebarContainer >
        {children}
      </SidebarContainer>
    </Providers>
  );
}

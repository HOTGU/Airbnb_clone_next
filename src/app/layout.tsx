import Navbar from "@/app/components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";
import SearchModal from "./components/modals/SearchModal";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RentModal />
        <SearchModal />
        <RegisterModal />
        <LoginModal />
        <Navbar currentUser={currentUser} />
        <div className="pt-28 pb-20">{children}</div>
      </body>
    </html>
  );
}

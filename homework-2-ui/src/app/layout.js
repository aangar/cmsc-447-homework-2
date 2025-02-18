import { Grid2 } from "@mui/material";
import Header from "./components/Header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Grid2 container >
        <Header/>
        {children}
      </Grid2>
      </body>
    </html>
  );
}

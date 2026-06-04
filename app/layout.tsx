import "./globals.css";
export const metadata = {
  title:
    "SR Electrical & Contractor | Government & Industrial Electrical Solutions",

  description:
    "Leading electrical contractor in Indore providing HT/LT installations, substations, industrial electrical works, street lighting projects, solar EPC solutions and AMC services.",

  keywords: [
    "Electrical Contractor",
    "Electrical Contractor Indore",
    "HT LT Installation",
    "Substation Installation",
    "Industrial Electrical Contractor",
    "Solar EPC",
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

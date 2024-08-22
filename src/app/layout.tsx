import ClientRootLayout from "@/components/ClientRootLayout";
import { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";

export const metadata: Metadata = {
  title: "CHISTO",
  description: "Клінінгова компанія",
};

const montserrat_alternatives = Montserrat_Alternates({
  weight: ["400", "600", "800"],
  subsets: ["cyrillic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat_alternatives.className}>
        <ClientRootLayout>{children}</ClientRootLayout>
      </body>
    </html>
  );
}

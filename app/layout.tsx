import AppBar from "@/components/AppBar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <AppBar />
        <main className="flex-1">{children}</main>

        <footer className="py-2 px-3">
          <div className="container mx-auto px-2">
            <p className="text-sm text-center text-muted-foreground">
              This application was built by Maciej Trojan for recruitment
              purposes only.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

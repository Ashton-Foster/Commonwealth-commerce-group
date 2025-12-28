export const metadata = {
  title: "Commonwealth Commerce Group",
  description: "E-commerce and wholesale real estate operations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}

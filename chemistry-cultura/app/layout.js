export const metadata = {
  title: 'Coverage Intelligence — Chris Gray Strategy × Chemistry Cultura',
  description: 'Latino media coverage tracking prototype',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#0a0a0a' }}>{children}</body>
    </html>
  );
}

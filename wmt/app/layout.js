export const metadata = {
  title: 'Professional Services: A Vision for WMT — Chris Gray Strategy',
  description: 'The Intelligence Layer — Professional services opportunity framework for WMT Digital.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, background: '#f7f8fa' }}>{children}</body>
    </html>
  );
}

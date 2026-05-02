import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GDPR Cookie Compliance Scanner',
  description: 'Scan websites for GDPR cookie violations. Detect non-compliant cookies, missing consent banners, and generate compliance reports.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="62cbcd7b-4e82-4796-ba18-4557dcca1402"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}

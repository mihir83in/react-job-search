// pages/ssr.tsx

type SSRPageProps = {
  timestamp: string
}

export async function getServerSideProps() {
  const timestamp = new Date().toISOString()
  return {
    props: {
      timestamp
    }
  }
}

export default function SSRPage({ timestamp }: SSRPageProps) {
  return (
    <div className="p-6 text-xl font-mono">
      <p>🚀 This page was rendered at: </p>
      <p className="text-blue-600 font-bold">{timestamp}</p>
    </div>
  )
}

// pages/ssr.tsx

type SSRPageProps = {
  timestamp: string,
  apiMessage: string
}

export async function getServerSideProps() {
  const res = await fetch('https://react-job-search-swart.vercel.app/api/hello')
  const data = await res.json()

  return {
    props: {
      apiMessage: data.message,
      timestamp: new Date().toISOString(),
    },
  }
}

export default function SSRPage({ apiMessage, timestamp }: SSRPageProps) {
  return (
    <div className="p-6">
      <p className="text-xl">⏰ Server time: <span className="font-bold">{timestamp}</span></p>
      <p className="text-lg mt-4">💬 API says: <span className="text-blue-600">{apiMessage}</span></p>
    </div>
  )
}

async function fetchExpressAPI() {
  // Environment variable set to: https://express-nextjs-backend.vercel.app/api
  const REMOTE_HOST = process.env.REMOTE_HOST || 'http://localhost:3333/api'

  const response = await fetch(REMOTE_HOST, {
    cache: 'no-store'
  })
  if (response.ok) {
    return await response.json()
  }
  return { message: response.statusText }
}

export default async function Home() {
  const apiResponse = await fetchExpressAPI()

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <pre className='max-w-prose'>
          {JSON.stringify(apiResponse, null, 2)}
        </pre>
      </div>
    </main>
  )
}

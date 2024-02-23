import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError() as { statusText: string; message: string }
  console.error(error)

  return (
    <div className="w-full min-h-screen grid place-items-center">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-2xl font-bold">Oops!</h1>
        <p className="text-muted-foreground">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-lg font-bold">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  )
}

import { LoaderFunction } from "@remix-run/node"
import { getUser } from "../utils/auth.server"

// ./app/routes/index.tsx
export default function Index() {
  return (
    <div className="h-screen bg-slate-700 flex justify-center items-center">
      <h2 className="text-blue-600 font-extrabold text-5xl">TailwindCSS Is Working!</h2>
    </div>
  )
}



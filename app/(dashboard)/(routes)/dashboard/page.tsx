import { UserButton } from "@clerk/nextjs"

const page = () => {
  return (
    <div className="text-center font-bold p-4 text-3xl">
      <h1>This is the Dashboard (Protected)</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default page
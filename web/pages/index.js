import DefaultLayout from "../components/Layout"
import ComponentDisplay from "../components/Layout/Display/Components"

export default function Home() {
  return (
    <DefaultLayout>
      <div className="w-full h-16 px-12 flex items-center gap-4">
          <p className="flex-none text-gray-500 font-semibold">Components</p>
          <div className="w-full h-0.5 rounded-full bg-gray-500" />
      </div>
      <ComponentDisplay more={true}/>
    </DefaultLayout>
  )
}

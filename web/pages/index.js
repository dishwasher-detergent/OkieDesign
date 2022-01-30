import DefaultLayout from "../components/Layout"
import ComponentDisplay from "../components/Layout/Display/Components"

export default function Home() {
  return (
    <DefaultLayout>
      <ComponentDisplay more={true}/>
    </DefaultLayout>
  )
}

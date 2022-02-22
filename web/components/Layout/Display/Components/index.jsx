import React from "react"
import Link from "next/link"
import ComponentLayout from "../../Documentation/Component"
import components from "../../../components"
import { useEffect, useState } from "react"

const ComponentDisplay = ({more}) => {
  const [allComps, setAllComps] = useState([])

  useEffect(()=> {
    let comps = []
    for(const key in components.content){
      if(key == 'samples') continue
      components.content[key].forEach(item => comps.push(item))
    }
    setAllComps(comps)
  },[components])

    return (
      <ComponentLayout title="Components">
        <div className="w-full grid grid-1 md:grid-cols-3 gap-4 z-10">
        {allComps.map((item, key) => {
          return (
            <Link href={'/Documentation/'+item.link} key={key}>
              <a className="card h-48 hover:shadow-lg hover:shadow-purple-200">
                  <div className="h-full flex items-center justify-center p-4">
                    {React.createElement(item.sample)}
                  </div>
                  <div className="px-4 py-2">
                    <p className="font-semibold text-purple-600">{item.name}</p>
                  </div>
              </a>
            </Link>
          )
        })}
        {more ? 
        <div className={"h-24 md:h-48 flex items-center justify-center " + (allComps.length % 3 == 0 ? "col-span-full" : "")}>
          <Link href="/Documentation">
            <a className="button ghost">
              Documentation
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </Link>
        </div> : null}
      </div>
    </ComponentLayout>
  )
}

export default ComponentDisplay

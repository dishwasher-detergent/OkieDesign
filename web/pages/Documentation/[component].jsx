import React from "react";
import { useRouter } from "next/router"
import DocsLayout from "../../components/Layout/Documentation"
import components from "../../components/components"

export default function Documentation() {
  const router = useRouter()
  const { component } = router.query;
  
  const getDocument = () => {
    let found = null
    for(const key in components.content){
      found = components.content[key].find(item => item.link == component)
      if(found) break
    }
    return React.createElement(found.component,{title: found.name});
  }

  return (
    <DocsLayout>
      {component ? getDocument() : null}
    </DocsLayout>
  )
}

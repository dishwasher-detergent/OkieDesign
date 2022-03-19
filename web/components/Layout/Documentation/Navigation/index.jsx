import Link from "next/link"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import components from "../../../components";

const DocNavigation = () => {
    const router = useRouter()
    const { component } = router.query;

    const [comp, setComps] = useState([])
    const [comp_pos, setComp_pos] = useState(0);

    const searchComponents = () => {
        let comps = []
        for(const key in components.content){
            components.content[key].forEach(item => comps.push(item))
        }
        setComps(comps);
        console.log(comp)
        // comps = comps.filter(word => word.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setComp_pos(comps.findIndex((element) => element.link == component))
    }

    useEffect(()=>{
        searchComponents()
    },[])

    return (
        <div className="w-full flex justify-between">
            <div>
            {comp_pos > 0 ? 
                <Link href={'/Documentation/' + comp[comp_pos - 1].link ? comp[comp_pos - 1].link : null}>
                    <a className="button ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg> 
                        {comp[comp_pos - 1].name ? comp[comp_pos - 1].name : null}
                    </a>
                </Link>
            : null}
            </div>
            <div>
            {comp_pos < comp.length - 1 ? 
                <Link href={'/Documentation/' + comp[comp_pos + 1].link ? comp[comp_pos + 1].link : null}>
                    <a className="button ghost">
                        {comp[comp_pos + 1].name ? comp[comp_pos + 1].name : null}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </Link>
            : null}
            </div>
        </div>
    )
}

export default DocNavigation;
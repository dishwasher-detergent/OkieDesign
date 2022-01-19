import DocsLayout from '../../components/Layout/Documentation'
import ProductCard from "../../components/Examples/ShopCard"

export default function Home() {
    return (
        <DocsLayout>
            <div className="w-full h-16 px-12 flex items-center gap-4">
                <p className="flex-none text-slate-500 font-semibold">Samples</p>
                <div className="w-full h-0.5 rounded-full bg-slate-500" />
            </div>
            <ProductCard />
        </DocsLayout>
    )
  }
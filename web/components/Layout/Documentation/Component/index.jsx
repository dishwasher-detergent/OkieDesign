import Divider from "../../../Divider";
import DocNavigation from "../Navigation";

const ComponentLayout = ({title,docNav = false, children}) => {
    return (
        <>
            <Divider title={title} />
            <section className="w-full grid grid-cols-1 gap-6">
                {children}
            </section>
            {docNav ? <DocNavigation /> : null }
        </>
    )
}

export default ComponentLayout;

export default function Layout({ children, container1, container2, container3 }: {
    children: React.ReactNode, 
    container1: React.ReactNode
    container2: React.ReactNode,
    container3: React.ReactNode
},
) {
    return (
        <>
            <section>
                {children}
            </section>
            <section>
                {container1}
                {container2}
                {container3}
            </section>
        </>
    );
}
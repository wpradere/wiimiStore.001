import TopMenu from "@/components/ui/top-menu/TopMenu";
import FooterComponent from "@/components/footer/footer";

export default function ShopLayout({ children}: {
    children: React.ReactNode;
}) {
    return (

        <main className=" min-h-screen ">
            <TopMenu/>
                 {children}
            <FooterComponent/>
        </main>

    );
}
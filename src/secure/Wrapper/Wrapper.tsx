import './Wrapper.css';
import Nav from "../components/Nav/Nav";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";

const Wrapper = (props: any) => (
    <div className="WrapperComponent">
        <Nav />

        <div className="container-fluid">
            <div className="row">

                <SidebarMenu />

                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    {props.children}
                </main>
            </div>
        </div>

    </div>
);

export default Wrapper;
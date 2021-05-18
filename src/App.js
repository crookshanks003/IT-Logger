import { Fragment, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize";
import Searchbar from "./components/layout/Searchbar";
import Logs from "./components/logs/Logs";
import AddButton from "./components/logs/AddButton";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/tech/AddTechModal";
import TechListModal from "./components/tech/TechListModal";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
    useEffect(() => {
        M.AutoInit();
    });

    return (
        <Provider store={store}>
            <Fragment>
                <Searchbar>
                    <div className="container">
                        <AddButton />
                        <AddLogModal />
                        <EditLogModal />
                        <AddTechModal />
                        <TechListModal />
                        <Logs />
                    </div>
                </Searchbar>
            </Fragment>
        </Provider>
    );
};

export default App;

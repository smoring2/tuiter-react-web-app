import Labs from './labs';
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                {/*<HelloWorld/>*/}
                {/*<Labs/>*/}
                {/*<Tuiter/>*/}
                {/*<Nav/>*/}
                <Routes>
                    <Route path="/*" element={<Labs/>}/>
                    <Route path="/hello" element={<HelloWorld/>}/>
                    <Route path="/tuiter/*" element={<Tuiter/>}/>
                </Routes>
                {/*<h1>Footer</h1>*/}
            </div>
        </BrowserRouter>
    );
}

export default App;

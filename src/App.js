import './App.css';
import ResponsiveAppBar from "./components/Nav";
import {Route, Routes} from 'react-router'
import StudentsList from "./components/StudentsList";
import CreateStudent from "./components/CreateStudent";

function App() {
    return (
        <div className="App">
            <ResponsiveAppBar/>
            <Routes>
                <Route path={"/"} element={<StudentsList/>}>Studentst</Route>
                <Route path={"/students"} element={<StudentsList/>}></Route>
                <Route path={"/create"} element={<CreateStudent/>}></Route>
            </Routes>
        </div>
    );
}

export default App;

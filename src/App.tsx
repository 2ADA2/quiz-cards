import React, {Suspense} from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {Layout} from "./layout/layout";
import {routes} from "./fuctions/routes";
import {Loading} from "./layout/loading";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Layout/>}>

                {routes.map(({path, Element}) => {
                    return <Route key={path} path={path} element={
                        <Suspense fallback={<Loading/>}>
                            <Element/>
                        </Suspense>
                    }/>
                })}

                <Route
                    path="*"
                    element={<Navigate to="/" replace/>}
                />
            </Route>
        </Routes>
    </div>
  );
}

export default App;

import React from "react";
import {Route, Routes, Navigate} from 'react-router-dom'
import {LinksPage} from "./pages/LinksPage";
import {DetailPage} from "./pages/DetailPage";
import {CreatePage} from "./pages/CreatePage";
import {AuthPage} from "./pages/AuthPage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/links" exact element={<LinksPage />}>

                </Route>
                <Route path="/create" exact element={<CreatePage />}>

                </Route>
                <Route path="/detail/:id" exact element={<DetailPage />}>

                </Route>
                <Route path="/"  element={<Navigate to="/create" />}>
                </Route>
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/" exact element={<AuthPage />}>
            </Route>
            <Route path="/"  element={<Navigate to="/auth" />}>
            </Route>
        </Routes>
    )
}
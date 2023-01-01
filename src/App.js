import { React } from 'react'
import { GlobalStyles } from './components'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { routes } from './helpers/routes'

function App() {
    const { categoryModal } = useSelector((state) => state.modalState)

    return (
        <>
            <GlobalStyles open={categoryModal} />

            <Routes>
                {routes.map((item) => (
                    <Route
                        key={item.id}
                        path={item.path}
                        element={item.component}
                    />
                ))}
            </Routes>
        </>
    )
}

export default App

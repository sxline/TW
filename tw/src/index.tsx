import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import './index.css'
import App from './App'
import { IRootStore } from './Interface/interfaces'
import storeProvider from './mst/stores/StoreProvider'
import reportWebVitals from './reportWebVitals'

const StoreContext = React.createContext<IRootStore | any>(null)

export const useRootStore = () => React.useContext(StoreContext)

const StoreProvider = ({ children }: { children: ReactElement }) => {
    return (
        <StoreContext.Provider value={ storeProvider }>
            { children }
        </StoreContext.Provider>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <StoreProvider>
            <App />
        </StoreProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

reportWebVitals()
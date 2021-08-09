import React, {useState, useContext} from 'react';

const AppContext = React.createContext()

const AppProvider = ({children}) =>{
    const [isSideBar, setIsSideBar] = useState(false);
    const [isModule, setIsModule] = useState(false);
    const [background, setBackground] = useState(false);

    const openSidebar = () =>{
        setIsSideBar(true)
    }

    const closeSidebar = () =>{
        setIsSideBar(false)
    }


    const openModule = () =>{
        setIsModule(true)
        setBackground(true)
    }

    const closeModule = () =>{
        setIsModule(false)
    }



    return <AppContext.Provider value={{

        isSideBar,
        isModule,
        background,
        openSidebar,
        closeSidebar,
        openModule,
        closeModule,
        
    }}>
            {children}

    </AppContext.Provider>

}
export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}
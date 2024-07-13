import { createContext } from "react";
//é bem parecido com a idade de session
//bem o context pode ser pensando como uma maneira de compartilhar informações entre todos os componentes
//porem é um conceito mais complexo tenho que analisar mais e ver mais conteudo sobre 
export const SomeContext = createContext()

export const HookUseContext = ({children}) => {
    const contextValue = "testing context"
    return (
        <SomeContext.Provider value = {{contextValue}}>
            {children}
        </SomeContext.Provider>
    )
}
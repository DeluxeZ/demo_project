import {createContext, FC, memo, useContext, useMemo, useState} from "react";
import {THEME} from "../../model/const";
import {OperatorStore} from "../../model/type";
import {noop} from "lodash";

export const OperatorContext = createContext({
    theme: THEME.RED,
    setTheme: noop,
    showHeader: true,
    setShowHeader: noop,
    showMenu: true,
    setShowMenu: noop,
});

export function useOperatorContext() {
    return useContext(OperatorContext);
}

export const OperatorProvider: FC<OperatorStore> = memo(props => {
    const { children } = props;
    const [theme, setTheme] = useState<THEME>(THEME.RED);
    const [showHeader, setShowHeader] = useState(true);
    const [showMenu, setShowMenu] = useState(true);
    
    const value = useMemo(() => ({
        theme,
        setTheme,
        showHeader,
        setShowHeader,
        showMenu,
        setShowMenu,
    }), [theme, setTheme, showHeader, setShowHeader, showMenu, setShowMenu]);
    
    return (
        <OperatorContext.Provider value={value}>
            {children}
        </OperatorContext.Provider>
    )
});
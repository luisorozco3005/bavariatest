interface ITheme{
    dark: boolean
}

type ThemeState ={
    theme:ITheme
}

type ThemeAction = {
    type:string
    theme:ITheme
}

type DispatchType = (args:ThemeAction) => ThemeAction
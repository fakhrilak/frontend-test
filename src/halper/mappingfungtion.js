import { ActionAlert, ActionLogout } from "./ActionLogout";
import { ChangeColor } from "./ChangeColor";

export const mappingFunction = [
    {
        name : "alert",
        func : ActionAlert
    },
    {
        name : "logout",
        func :  ActionLogout
    },
    {
        name : "changecolor",
        func : ChangeColor
    }
]
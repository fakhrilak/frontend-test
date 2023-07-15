import user from "../../img/user.png"
import setting from "../../img/settings.png"
export const dataNavbar = [
    {
        "name": "Dashboard",
        "path" : "/dashboard",
        "labelPath"  : "Dashboard",
        "img" : "https://blogger.zilog.online/static/media/logo.436f1557.png",
        "style" : "left"
    },
    {
        "name": "DashBoard",
        "path" : "/dashboard",
        "labelPath"  : "Dashboard",
        "img" : "",
        "style" : "left"
    },
    {
        "name": "Master Data",
        "path" : "/masterdata",
        "labelPath" : "Master Data Ruas",
        "img" : "",
        "style" : "left"
    },
    {
        "name": "Settings",
        "path" : "/settings",
        "labelPath" : "Settings",
        "dropDown" : [
            {
                "name" : "Logout",
                "path" : "/logout"
            }
        ],
        "img" : setting,
        "style" : "right"
    },
    {
        "name": "Dashboard",
        "path" : "/dashboard",
        "labelPath" : "Dashboard",
        "dropDown" : [
        ],
        "img" : user,
        "style" : "right"
    },
    
]
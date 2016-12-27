var routes = [
    {
        path:"/",
        component:resolve=>{
            require(['app/test'],resolve)
        }
    }
]

export default routes;

import tplHome from "../html/home.tpl.html";
const routes=()=>{

    const data =document,
    main=data.querySelector(".Main")
    data.addEventListener("DOMContentLoaded",e=>{
        e.preventDefault()
        main.innerHTML=tplHome;
    })
}
export default routes;

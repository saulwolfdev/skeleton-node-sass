
// import "rellax";
import tplHome from "../html/Home.tpl.html";
const routes=()=>{
    const data =document,
    main=data.querySelector(".main")
    data.addEventListener("DOMContentLoaded",e=>{
        e.preventDefault()
        main.innerHTML=tplHome;
    })
}
export default routes;

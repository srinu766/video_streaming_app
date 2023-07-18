import { render } from "@testing-library/react"
import Head from "../Head"

test("Logo should be load on rendering header",()=>{
    //load header
    const head = render(<Head/>);
    console.log(head);
    //check if logo is loaded
})
import Header from "./Header"
import Education from "./Education"

export default function Document({ data }) {
    return <>
        <Header data={data.header}/>
        <Education data={data.education}/>

    </>
}
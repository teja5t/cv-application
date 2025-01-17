import Header from "./Header"
import Education from "./Education"
import Experience from "./Experience"
import Additional from "./Additional"

export default function Document({ data }) {
    return <>
        <Header data={data.header}/>
        <Education data={data.education}/>
        <Experience data={data.experience}/>
        <Additional data={data.additional}/>
    </>
}
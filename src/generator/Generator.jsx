import Header from "./Header"
import Education from "./Education"

export default function Generator({ updateDocument, data, addEducationSection, removeEducationSection }) {
    return <>
    <h2>Header:</h2>
    <Header updateDocument={updateDocument} data={data.header}/>
    <h2>Education:</h2>
    <Education 
        updateDocument={updateDocument} 
        data={data.education}
        addEducationSection={addEducationSection}
        removeEducationSection={removeEducationSection}/>
    </>
}
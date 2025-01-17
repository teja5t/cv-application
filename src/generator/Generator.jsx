import Header from "./Header"
import Education from "./Education"
import Experience from "./Experience"
import Additional from "./Additional"

export default function Generator({ 
    updateDocument, data, 
    addEducationSection, removeEducationSection, 
    addExperienceSection, removeExperienceSection,
    addSection, removeSection, addItem, removeItem }) {
    return <>
        <h2>Header:</h2>
        <Header updateDocument={updateDocument} data={data.header}/>
        <h2>Education:</h2>
        <Education 
            updateDocument={updateDocument} 
            data={data.education}
            addEducationSection={addEducationSection}
            removeEducationSection={removeEducationSection}/>
        <h2>Experience:</h2>
        <Experience
            updateDocument={updateDocument} 
            data={data.experience}
            addExperienceSection={addExperienceSection}
            removeExperienceSection={removeExperienceSection}/>
        < Additional 
            updateDocument={updateDocument}
            data={data.additional}
            addSection={addSection}
            removeSection={removeSection}
            addItem={addItem}
            removeItem={removeItem}
        />
    </>
}
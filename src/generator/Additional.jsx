import FormComponent from "./FormComponent";

export default function Additional({ updateDocument, data, addSection, removeSection, addItem, removeItem }) {
    return <>
        {data.map((section, i) => (
            <div key={section.key}>
                <FormComponent
                    id={`sectionTitle-${i}`}
                    label='Section Title'
                    value={section.sectionTitle}
                    onChange={(e) => updateDocument('additional', 'sectionTitle', e.target.value, i)}
                />
                <button onClick={() => removeSection(i)}>Delete Section</button>
                {section.items.map((item, j) => (
                    <div className="generatorSection" key={item.key}>
                        <FormComponent
                            id={`title-${i}${j}`}
                            label='Title'
                            value={item.title}
                            onChange={(e) => updateDocument('additional', 'title', e.target.value, i, j)}
                        />
                        <FormComponent
                            id='description'
                            label='Description'
                            value={item.description}
                            component="textarea"
                            onChange={(e) => updateDocument('additional', 'description', e.target.value, i, j)}
                        />
                        <FormComponent
                            id='dates'
                            label='Dates'
                            value={item.dates}
                            onChange={(e) => updateDocument('additional', 'dates', e.target.value, i, j)}
                        />
                        <button onClick={() => removeItem(i, j)}>Delete</button>
                    </div>
                ))}
                <button onClick={() => addItem(i)}>Add</button>
            </div>
        ))}
        <button onClick={addSection}>Add Section</button>    
    </>
}
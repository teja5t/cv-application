import FormComponent from "./FormComponent";

export default function Education({ data, updateDocument, addEducationSection, removeEducationSection }) {
    const fields = [
        { label: 'School', key: 'school' },
        { label: 'Location', key: 'schoolLocation' },
        { label: 'Degree', key: 'degree' },
        { label: 'Details', key: 'details', component: 'textarea' },
        { label: 'Graduation Date', key: 'graduation' },
    ];

    return (
        <>
            {data.map((element, index) => (
                <div className="generatorSection" key={element.key}>
                    {fields.map((field) => (
                        <FormComponent
                            key={field.key}
                            id={`${field.key}-${index}`}
                            label={field.label}
                            value={element[field.key]}
                            onChange={(e) => updateDocument('education', field.key, e.target.value, index)}
                            component={field.component}
                        />
                    ))}
                    <button type='button' onClick={() => removeEducationSection(index)}>
                        Delete
                    </button>
                </div>
            ))}
            <button type='button' onClick={() => addEducationSection()}>Add</button>
        </>
    );
}

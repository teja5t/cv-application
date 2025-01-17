import FormComponent from "./FormComponent";

export default function Experience({ data, updateDocument, addExperienceSection, removeExperienceSection }) {
    const fields = [
        { label: 'Position', key: 'position' },
        { label: 'Company', key: 'company' },
        { label: 'Company Location', key: 'companyLocation' },
        { label: 'Description', key: 'description', component: 'textarea' },
        { label: 'Dates', key: 'dates' },
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
                            onChange={(e) => updateDocument('experience', field.key, e.target.value, index)}
                            component={field.component}
                        />
                    ))}
                    <button type='button' onClick={() => removeExperienceSection(index)}>
                        Delete
                    </button>
                </div>
            ))}
            <button type='button' onClick={() => addExperienceSection()}>Add</button>
        </>
    );
}

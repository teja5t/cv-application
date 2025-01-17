import FormComponent from "./FormComponent";

export default function Header({ data, updateDocument }) {
    const fields = [
        { label: 'Full Name', key: 'fullName' },
        { label: 'Phone Number', key: 'phoneNumber' },
        { label: 'Email', key: 'email' },
        { label: 'Location', key: 'location' },
    ];

    return (
        <>
            <h2>Header</h2>
            {fields.map((field) => (
                <FormComponent
                    key={field.key}
                    id={field.key}
                    label={field.label}
                    value={data[field.key]}
                    onChange={(e) => updateDocument('header', field.key, e.target.value)}
                />
            ))}
        </>
    );
}

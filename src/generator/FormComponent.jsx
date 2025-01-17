export default function FormComponent({ id, label, value, onChange, type = 'text', component = 'input' }) {
    const InputComponent = component;
    return (
        <label htmlFor={id}>
            {label}:
            <InputComponent
                id={id}
                type={type}
                value={value}
                onChange={onChange}
            />
        </label>
    );
}

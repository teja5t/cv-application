export default function Education({ data }) {
    console.log(data)
    return (
        <>
            <h3>Education</h3>
            {data.map((element) => (
                <div key={element.key}>
                    <p><strong>{element.school}, </strong>{element.schoolLocation}</p>
                    <p>{element.degree}</p>
                    <p>{element.details}</p>
                    <p className="date">{element.graduation}</p>
                </div>
            ))}
        </>
    );
}
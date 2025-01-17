export default function Experience({ data }) {
    //console.log(data)
    return (
        <>
            <h3>Experience</h3>
            {data.map((element) => (
                <div key={element.key}>
                    <p><strong>{element.position}</strong></p>
                    <p><em>{element.company}, {element.companyLocation}</em></p>
                    <p>{element.description}</p>
                    <p className="date">{element.dates}</p>
                </div>
            ))}
        </>
    );
}
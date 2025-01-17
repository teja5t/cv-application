export default function Additional({ data }) {
    return (
        <>
            {data.map((section) => (
                <div key={section.key} className="documentSection">
                    <h3>{section.sectionTitle}</h3>
                    {section.items.map((item) => (
                        <div className="item" key={item.key}>
                            <p><strong>{item.title}</strong></p>
                            <p>{item.description}</p>
                            <p className="date">{item.dates}</p>
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
}
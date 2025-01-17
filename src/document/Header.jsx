export default function Header({ data }) {
    return (
        <>
            <h2>{data.fullName}</h2>
            <p>{data.phoneNumber} | {data.email} | {data.location}</p>
        </>
    )
}
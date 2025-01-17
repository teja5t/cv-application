import './Header.css'

export default function Header({ data }) {
    return (
        <>
            <h2>{data.fullName}</h2>
            <p id='header-info'>{data.phoneNumber} | <strong>{data.email}</strong> | {data.location}</p>
        </>
    )
}
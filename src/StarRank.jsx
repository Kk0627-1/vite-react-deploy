export default function StarRank({ rank }) {
    let star = "";
    for (i = rank; i > 0; i--) {
        star = star + "⭐";
    }

    return (
        <>
            <p>{star}</p>
        </>
    )

}
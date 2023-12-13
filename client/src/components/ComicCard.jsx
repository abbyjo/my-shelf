const styles = {
    img: {
        borderRadius: "20px",
        maxWidth: "300px",
        height: "400px",
        objectFit: "cover",
        padding:"2.5%"
    },
    title: {
        fontWeight: "bold"
    }
};

function ComicCard(props) {
    return (
        <div className="text-center p-3">
            <img style={styles.img} src={props.src} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 style={styles.title} className="card-title pt-2">{props.title}</h5>
            </div>
        </div>
    )
}

export default ComicCard;
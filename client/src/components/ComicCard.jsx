const styles = {
    img: {
        borderRadius: "10px",
        maxWidth: "300px",
        height: "400px",
        objectFit: "cover",
        padding:"2.5%"
    }
};

function ComicCard(props) {
    return (
        <div className="text-center p-3">
            <img style={styles.img} src={props.src} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title pt-3">{props.title}</h5>
            </div>
        </div>
    )
}

export default ComicCard;
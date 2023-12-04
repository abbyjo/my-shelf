function ComicCard(props) {
    return (
        <div className="text-center p-3">
            <img src={props.src} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title pt-3">{props.title}</h5>
            </div>
        </div>
    )
}

export default ComicCard;
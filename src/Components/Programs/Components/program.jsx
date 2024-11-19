const Program = ({imageSrc, description, imageIcon}) => {
    return(
    <div className="program">
        <img src={imageSrc} />
        <div className="caption">
            <img src={imageIcon}/>
            <p>{description}</p>
        </div>
    </div>   
    )
}

export default Program;
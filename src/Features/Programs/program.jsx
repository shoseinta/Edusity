const Program = ({imageSrc, description, imageIcon}) => {
    return(
    <div className="program">
        <img src={program_1} />
        <div className="caption">
            <img src={imageIcon}/>
            <p>{description}</p>
        </div>
    </div>   
    )
}

export default Program;
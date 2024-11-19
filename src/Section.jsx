import Title from "./Components/Title/Title";

const Section = ({title, subTitle, children}) => {
    return(
        <>
            <Title title={title} subTitle={subTitle} />
            {children}
        </>
    )
}

export default Section;
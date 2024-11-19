import AboutParagraph from "./AboutParagraph"
const AboutRight = () => {
    const AboutParagraphs = [
        {
            id: 1,
            content: `Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experinces needed to excel in the dynamic field of education.`
        },
        {
            id: 2,
            content: `With a focus on innovation, hands-on learning, and personalize
          mentorship, our pograms prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.`
        },
        {
            id: 3,
            content: `Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.`
        }
    ]
    return(
    <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorow&#39;s Leaders Today</h2>
        {AboutParagraphs.map(paragraph => <AboutParagraph key={paragraph.id} content={paragraph.content} />)}
    </div>
    )
}

export default AboutRight;
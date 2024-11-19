import Program from "../Components/program"
import "./Programs.css"
import program_1 from "../../../assets/program-1.png"
import program_2 from "../../../assets/program-2.png"
import program_3 from "../../../assets/program-3.png"
import program_icon_1 from "../../../assets/program-icon-1.png"
import program_icon_2 from "../../../assets/program-icon-2.png"
import program_icon_3 from "../../../assets/program-icon-3.png"

const programsData = [
    {
        id: 1,
        imageSrc: program_1,
        description: "Graduation Degree",
        imageIcon: program_icon_1
    },
    {
        id: 2,
        imageSrc: program_2,
        description: "Masters Degree",
        imageIcon: program_icon_2
    },
    {
        id: 3,
        imageSrc: program_3,
        description: "Post Graduation",
        imageIcon: program_icon_3
    }
]

const Programs = () => {
  return (
    <div className='programs'>
        {programsData.map(programData => <Program key={programData.id} {...programData} />)}
    </div>
  )
}

export default Programs
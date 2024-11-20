import Program from "../Components/program";
import { programsData } from "../../../Constants/Constants";
import "./Programs.css";




const Programs = () => {
  return (
    <div className="programs">
      {programsData.map((programData) => (
        <Program key={programData.id} {...programData} />
      ))}
    </div>
  );
};

export default Programs;

import Question from "../components/Questions"
import dataChemie from "../data/dataChemie"
import SubjectName from "../components/SubjectName"
const Chemie = () => {


    return(
        <div>
            <SubjectName name={"Chemie"} ></SubjectName>
            <Question data={dataChemie} subject={"chemie"}/>
            
        </div>
    )
}

export default Chemie

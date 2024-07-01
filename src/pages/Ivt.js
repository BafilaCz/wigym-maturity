import Question from "../components/Questions"
import dataIvt from "../data/dataIvt"
import SubjectName from "../components/SubjectName"
const Ivt = () => {


    return(
        <div>
            <SubjectName name={"IVT"}></SubjectName>
            <Question data={dataIvt} subject={"ivt"}/>
            
        </div>
    )
}

export default Ivt

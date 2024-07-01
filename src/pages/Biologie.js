import Question from "../components/Questions"
import dataBiologie from "../data/dataBiologie"
import SubjectName from "../components/SubjectName"
const Biologie = () => {


    return(
        <div>
            <SubjectName name={"Biologie"}></SubjectName>
            <Question data={dataBiologie} subject={"biologie"}/>
            
        </div>
    )
}

export default Biologie

import Question from "../components/Questions"
import dataZemepis from "../data/dataZemepis"
import SubjectName from "../components/SubjectName"
const Zemepis = () => {


    return(
        <div>
            <SubjectName nameZemepis={"Zemepis"}></SubjectName>
            <Question data={dataZemepis} subject={"zemepis"}/>
            
        </div>
    )
}

export default Zemepis

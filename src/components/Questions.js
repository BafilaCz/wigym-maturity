import "./Questions.css"
import React, { useState, useEffect } from "react"

const Questions = (props) => {
    const data = props.data
    const subject = props.subject 

    // Initialize state for each question
    const initialState = data.map(() => ({
        tick: "✓",
        isTick: true,
        isDescriptionVisible: false, // Added for description visibility
    }))

    const [questionsState, setQuestionsState] = useState(() => {
        // Load state from localStorage if available, otherwise use initial state
        const savedState = localStorage.getItem(`questionsState${subject}`)
        return savedState ? JSON.parse(savedState) : initialState
    })

    useEffect(() => {
        // Save state to localStorage whenever questionsState changes
        localStorage.setItem(`questionsState${subject}`, JSON.stringify(questionsState))
    }, [questionsState])

    const tickHandler = (index) => {
        // Update state for the specific item
        setQuestionsState((prevState) => {
            const newState = [...prevState]
            const current = newState[index]
            newState[index] = {
                ...current,
                tick: current.isTick ? "x" : "✓",
                isTick: !current.isTick,
            }
            return newState
        })
    }

    const toggleDescriptionHandler = (index) => {
        // Update state for the specific item's description visibility
        setQuestionsState((prevState) => {
            const newState = [...prevState]
            const current = newState[index]
            newState[index] = {
                ...current,
                isDescriptionVisible: !current.isDescriptionVisible,
            }
            return newState
        })
    }

    return (
        <div>
            {data.map((oneItem, index) => {
                const { id, question, description } = oneItem
                const { tick, isDescriptionVisible } = questionsState[index]
                const questionClasses = `oneQuestion ${tick === 'x' ? 'ticked' : ''}`

                return (
                    <div key={id}>
                        <div className={questionClasses}>
                            <p>{question}</p>
                            <div className="buttons">
                                <button className="tick" onClick={() => tickHandler(index)}>
                                    {tick}
                                </button>
                                <button className="plus" onClick={() => toggleDescriptionHandler(index)}>
                                    {isDescriptionVisible ? "-" : "+"}
                                </button>
                            </div>
                        </div>
                        {isDescriptionVisible && (
                            <div className="oneDescription">
                                <p>{description}</p>
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default Questions

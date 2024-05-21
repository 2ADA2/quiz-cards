import {FC, useState} from "react";
import {CardInterface} from "../utils/interfaces";
import "../styles/components/card.css"

export const Card: FC<CardInterface> = ({Author, date, description, card, name}) => {
    const [complited, setComplited] = useState<number>(0);
    const [question, setQuestion] = useState<number>(0);
    const [wrong, setWrong] = useState<number>(0);
    const [end, setEnd] = useState<boolean>(false);

    const [info, setInfo] = useState<boolean>(false);

    function checkAnswers(answer: number) {
        if (answer !== card[question].num) {
            setWrong(wrong + 1)
        }
        setComplited(complited + 1 / card.length)
        if (question + 1 >= card.length) {
            setEnd(true)
            return
        }
        setQuestion(question + 1)
    }

    function restartCard() {
        setComplited(0)
        setQuestion(0)
        setWrong(0)
        setEnd(false)
    }

    return (
        <div className={"card-container"}>
            <div className={"card"}>
                <div className={"card-bar-container"}>
                    <div className={"card-bar"} style={{width: `${complited * 100}%`}}></div>
                </div>

                <h5>{name}</h5>
                <button className={"card-info-button"} onClick={() => setInfo(!info)}>
                    i
                </button>
                <div className={"card-info"} style={{display: info ? "block" : "none"}}>
                    <div>
                        <span>Автор: </span>
                        <span>{Author}</span>
                    </div>
                    <div>
                        <span>Описание: </span>
                        <span>{description}</span>
                    </div>
                    <div>
                        <span>Дата создания: </span>
                        <span>{date}</span>
                    </div>
                </div>


                {!end ?
                    <div className={"card-answers"}>
                        <div className={"card-question"}>
                            {card[question].question}
                        </div>
                        {
                            card[question].answers.map((answer) => (

                                <button
                                    onClick={() => checkAnswers(card[question].answers.indexOf(answer))}
                                    key={answer}
                                    className={"card-button"}
                                >
                                    {answer}
                                </button>
                            ))
                        }
                    </div>

                    :
                    <div className={"card-end"}>
                        <div className={"card-results"}>
                            <span>Результаты опроса: </span>
                            <div>
                                <span>Верные ответы: </span>
                                <span>{card.length - wrong}</span>
                            </div>
                            <div>
                                <span>Неверные ответы: </span>
                                <span>{wrong}</span>
                            </div>
                            <div>
                                <span>Процент правильных: </span>
                                <span>{((card.length - wrong) / card.length * 100).toFixed()}%</span>
                            </div>
                        </div>
                        <button onClick={() => restartCard()} className={"card-button"}>Заново</button>
                    </div>
                }

            </div>
            <div className={"card-back"}/>
            <div className={"card-back"}/>
        </div>

    );
};

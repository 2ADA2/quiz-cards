import "../styles/pages/landing.css"
import {Card} from "../components/card";
import test from "../cards/card.json"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear} from "@fortawesome/free-solid-svg-icons";

export const Landing = () => {
    return (
        <div className={"landing"}>
            <div className={"landing-article"}>
                <h1>Quiz</h1>
                <span>платформа для Quiz опросников</span>
            </div>

            <section className={"landing_header"}>
                <div>
                    <h2>Quiz карточки</h2>
                    <p>Проходите занообразные опросы по карточкам от других пользователей или от разработчиков! Вы можете сами создать и опубликовать свой опрос по карточкам.</p>
                    <p>Такие опросы можно использовать в различных целях, как для реального тестирования, так и для изучения, запоминания и закрепления новых заний.</p>
                </div>
                <div className={"landing-header-img"}>
                    <div>
                        <Card Author={test.Author} card={test.card} description={test.description} date={test.date} name={test.name}/>
                    </div>
                </div>
            </section>
            <section className={"landing-block"}>
                <div className={"landing-block-image"}>
                    <FontAwesomeIcon icon={faGear}/>
                    <FontAwesomeIcon icon={faGear}/>
                </div>
                <div className={"landing-block-text"}>
                    <h2>Запоминайте что угодно с помощью бесплатных цифровых карточек</h2>
                    <p>Исследования показывают, что самопроверка с помощью карточек более эффективна, чем перечитывание
                        конспектов. Найдите готовые карточки, созданные вашими сверстниками и учителями, или мгновенно
                        создайте собственные.</p>
                </div>
            </section>

        </div>
    );
};

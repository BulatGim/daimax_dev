import "./sectionWhyUs.css"
import Advantage from "../../molecules/advantage/advantage";
export default function SectionWhyUs(){
    const advantages = [{
        id: Math.random(),
        title: "Честная стоимость",
        content: "Это когда вы платите за фактическое время работы эксперта (дизайнера, аналитика, проектировщика, верстальщика) над вашим проектом, а не за воздух и накрутки."
    },{
        id: Math.random(),
        title: "Соблюдение сроков",
        content: "Вы заранее будете знать, когда сайт запустится на полную мощность. Сроки обязательно прописываются в договоре, но… Мы всегда стремимся сдать проект на 3-4 дня раньше."
    },{
        id: Math.random(),
        title: "Комплексный подход",
        content: "Как говорят «под ключ»: от разработки логотипа до бесперебойного сайта, от анализа рынка до проектирования по бизнес-требованиям и ввода web-систем в эксплуатацию."
    },{
        id: Math.random(),
        title: "Персонализация",
        content: "Для нас требования и задачи, стоящие перед вашим бизнесом, в приоритете! Всегда ищем СВОЙ путь для каждого проекта, чтобы получить на выходе эффективный продукт."
    },{
        id: Math.random(),
        title: "Ответственность",
        content: "За годы работы все процессы по задачам клиентов идут как по маслу – мы точно знаем, где нужна гибкость, как верно распределять и выполнять этапы по степени важности."
    },{
        id: Math.random(),
        title: "Идеальный результат",
        content: "Мы предлагаем создание сайта под ключ, начиная с разработки сайта и заканчивая технической поддержкой."
    }
    ];
    return(
        <section className="whyUs">
            <h3 className="whyUs__title">ПОЧЕМУ МЫ</h3>
            <div className="content">
                <div className="content__leftBlock">
                    {advantages.slice(0,3).map((item)=>
                        <Advantage key={item.id} title={item.title} description={item.content}/>
                    )}
                </div>
                <div className="content__rightBlock">
                    {advantages.slice(3,6).map((item)=>
                        <Advantage key={item.id} title={item.title} description={item.content}/>
                    )}
                </div>
            </div>
            <div className='whyUs__logo'/>
        </section>
    )
}
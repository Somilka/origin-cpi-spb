import MainLayout from "../../../layouts/MainLayout";

import FFStyles from '/styles/FF.module.scss'
import MainStyles from '/styles/main.module.scss'

export default function Lukes() {
    const data = [
        {
            imgSrc: '/luke.jpg',
            title: 'Люк противопожарный ЛПМ ei 60',
            text: 'Огнестойкость 60 мин, строительный проем 500х500 мм. Противопожарные люки металлические используются для защиты от пожара проемов зданий и сооружений различного назначения. Гарантия эксплуатации -10 лет.'
            // price: 8700,
            // salePrice: 8300,
            // salePriceComment: '(при заказе от 3-х дверей)',
        }
    ];

    return (
        <MainLayout>
            <div className="content"><h2 className="title">Люки противопожарные</h2>
                <p className="full tac">
                    Каталог продукции противопожарных люков:
                </p>
            </div>
            <div className="content">
                {data.map((card, num) =>
                    <div className="full flex" key={num}>
                        <img src={"/static/opens/FF/FF" + card.imgSrc} style={{ width: '133px' }} alt="" />
                        <div className="flex column">
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                        </div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

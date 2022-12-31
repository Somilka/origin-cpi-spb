import MainLayout from "../../../layouts/MainLayout";

import FFStyles from '/styles/FF.module.scss'
import MainStyles from '/styles/main.module.scss'

export default function DoubleFieldGlazed() {
    const data = [
        {
            imgSrc: '/double-field.jpg',
            title: 'Противопожарная дверь ДПМ-02/60 (без остекления)',
            textHover1: 'Огнестойкость 60 мин',
            text1: ', строительный проем ',
            textHover2: '1200х2100 мм',
            text2: '. Противопожарные двери металлические двупольные без остекления используются для защиты от пожара проемов зданий и сооружений различного назначения. Гарантия эксплуатации -10 лет.'
            // price: 8700,
            // salePrice: 8300,
            // salePriceComment: '(при заказе от 3-х дверей)',
        }
    ];

    return (
        <MainLayout>
            <div className="content"><h2 className="title">Противопожарные двери двупольные</h2>
            <p className="full tac">Каталог продукции двупольных противопожарных дверей:
</p></div>
            <div className="content">
                {data.map((card, num) =>
                    <div className="full flex" key={num}>
                        <img src={"/static/opens/FF/FF" + card.imgSrc} style={{width: '100px'}} alt="" />
                        <div className="flex column">
                            <h3>{card.title}</h3>
                            <p>
                                <span className="hoverable mainBlueColor">
                                    {card.textHover1}
                                </span>
                                <span>
                                    {card.text1}
                                </span>
                                <span className="hoverable mainBlueColor">
                                    {card.textHover2}
                                </span>
                                <span>
                                    {card.text2}
                                </span>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

import MainLayout from "../../../layouts/MainLayout";

import FFStyles from '/styles/FF.module.scss'
import MainStyles from '/styles/main.module.scss'

export default function SingleField() {
    const data = [
        {
            imgSrc: '/single-field.png',
            title: 'Противопожарная дверь ДПМ-01/60 (800х2100)',
            price: 8700,
            salePrice: 8300,
            salePriceComment: '(при заказе от 3-х дверей)',
            params: [
                {
                    title: 'Артикул:',
                    value: 'ДПМ16821',
                    colored: true
                },
                {
                    title: 'Конструкция:',
                    value: 'однопольная',
                    colored: false
                },
                {
                    title: 'Размер полотна:',
                    value: '700х2000 мм',
                    colored: true
                },
                {
                    title: 'Класс огнестойкости:',
                    value: 'Ei 60',
                    colored: false
                },
                {
                    title: 'Антипаника:',
                    value: 'опция',
                    colored: true
                },
                {
                    title: 'Назначение:',
                    value: 'наружная',
                    colored: true
                },
                {
                    title: 'Открывание:',
                    value: 'правое / левое',
                    colored: false
                },
                {
                    title: 'Толщина полотна:',
                    value: '50 мм',
                    colored: false
                },
                {
                    title: 'Цвет:',
                    value: 'RAL 7035',
                    colored: false
                },
                {
                    title: 'Наличие:',
                    value: 'под заказ',
                    colored: true
                }
            ]
        }
    ];

    return (
        <MainLayout>
            <div className="content"><h2 className="title">Противопожарные двери однопольные</h2>
            <p className="full tac">В каталоге представлены популярные размеры одностворчатых дверей. Для определения нужной конструкции выберете размеры коробок, варианты стекла, класс огнестойкости и наличие дополнительных комплектующих. </p></div>
            <div className="content">
                {data.map((card, num) =>
                    <div className={num % 2 == 0 ? "hl flex column bigger-gap aic" : "hr flex column bigger-gap aic"} key={num}>
                        <h3>{card.title}</h3>
                        <img src={"/static/opens/FF/FF" + card.imgSrc} className="w50" alt="" />
                        <div className="flex column w100">
                            {card.params.map((param, paramNum) =>
                                <div className="flex jcsb" key={paramNum}>
                                    <p className="paramTitle">{param.title}</p>
                                    <p className={param.colored == false ? "paramValue" : "paramValue mainBlueColor"}>{param.value}</p>
                                </div>
                            )}
                        </div>
                        <div className="flex column w100 cost">
                            <p className={FFStyles.oldCost}>Цена: <span className="priceBlock crossed mainBlueColor"><span className="price">{card.price}</span> руб.</span></p>
                            <p className={FFStyles.currentCost}>Со скидкой: <span className="priceBlock mainBlueColor"><span className="price">{card.salePrice}</span> руб.</span></p>
                            <p className="min-text mainBlueColor">{card.salePriceComment}</p>
                        </div>
                        <div className="btn w100">Заказать</div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

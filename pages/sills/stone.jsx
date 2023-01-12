import MainLayout from "../../layouts/MainLayout";
import Link from "next/link";

import { useState } from "react";

import CallMasterBtn from "../../components/Btns/CallMasterBtn/CallMasterBtn";
import CallRaschBtn from "../../components/Btns/CallRaschBtn/CallRaschBtn";

import SillsCategories from "/components/SillsCategories";

export default function Stone() {
    const [winNav, setWinNav] = useState(1);

    return (
        <MainLayout>
            <div className="content">
                <div className="win-nav">
                    <SillsCategories winNav={winNav} />
                </div>
            </div>
            <div className="content"><div className="title">Каменные подоконники</div></div>
            <div className="content">
                <div className="block full">
                    <h2>Кварцевый агломерат</h2>
                    <p>– самый твердый из искусственных камней. Его практически невозможно поцарапать в домашних условиях. Поэтому его идеальное применение – кухонные столешницы. Кварцевый агломерат – самый дорогой искусственный камень. Его стоимость варьируется от 30 000 до 150 000 и более рублей за м.кв. готового изделия.</p>
                </div>
                <div className="block full">
                    <Link href="/materials/acrylic"><h2 className="link">Акриловый камень</h2></Link>
                    <p>– термопластичен, то есть плавиться и гнется при нагреве. Его можно стыковать без видимых швов. Оптимально применение – изделия сложных геометрических форм. Например – подоконник, переходящий в столешницу, переходящую в ступени и так далее. Акриловый камень по сути высококачественный пластик, он, относительно, мягкий, поэтому он подвержен царапанию. Рекомендовано выбирать цвета белого или серых оттенков, на них царапины практически не видны. Стоимость акрилового камня варьируется от 20 000 руб. и более за м.кв. готового изделия.</p>
                </div>
                <img src="/static/materials/marble/comp_marble.png" alt="" className="hl img-height" />
                <div className="block hr">
                    <Link href="/materials/comp-marble"><h2 className="link">Композитный мрамор</h2></Link>
                    <div className="w100">
                        <img src="/static/materials/marble/marble4.png" alt="" className="fr" />
                        <p>– самый доступный из искусственных камней. По сути это предыдущая технология изготовления кварцевого агломерата. Их состав на 99% идентичный. Разница в технологии производства. Композитный мрамор не такой твердый, как агломерат и не такой пластичный, как акрил. Но подоконникам не нужна сверх устойчивость к царапанию, а подоконников сложных геометрических форм менее 5%, поэтому переплачивать за эти свойства не имеет смысла. Цена композитного мрамора варьируется от 13 000 руб. до 19 000 руб.</p>
                    </div>
                    <CallMasterBtn />
                    <CallRaschBtn />
                </div>
            </div>
        </MainLayout>
    );
};

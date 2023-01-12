import MainLayout from "../../layouts/MainLayout";

import { useState } from "react";

import CallMasterBtn from "../../components/Btns/CallMasterBtn/CallMasterBtn";
import CallRaschBtn from "../../components/Btns/CallRaschBtn/CallRaschBtn";

import SillsCategories from "/components/SillsCategories";

export default function Brusbox() {
    const [winNav, setWinNav] = useState(0);

 return (
    <MainLayout>
        <div className="content">
            <div className="win-nav">
                <SillsCategories winNav={winNav} />
            </div>
        </div>
        <div className="content">
            <div className="title">Подоконники Brusbox</div>
        </div>
        <div className="content">
                <img className="full" src="/static/sills/brusbox.jpg" alt="" />
                <div className="full flex column">
                    <p className="">
                    В 2004 году компания <b>BRUSBOX</b> начала выпуск ПВХ подоконников под маркой <b>BRUSBOX</b>. На сегодняшний день компания <b>BRUSBOX</b> является одним из крупнейших поставщиков ПВХ подоконников на российском рынке. Объемы производства переваливают за миллион квадратных метров в год.<br/>
                            На сегодняшний день компания <b>БРУСБОКС</b> производит 2 типа подоконников — подоконник СТАНДАРТ (шириной до 800 мм) и подоконник AERO (шириной до 650 мм).<br/>
                            <b>БРУСБОКС</b> для ламинации ПВХ подоконников использует пленку мирового лидера по производству ПВХ пленок фирмы «Ренолит», которая устойчива к влаге, механическим и термическим воздействиям. Поверхность ламинированного подоконника покрыта специальной защитной пленкой для предотвращения механических повреждений при транспортировке и монтаже. Для равномерного распределения монтажной пены подоконники <b>BRUSBOX</b> имеют специальные канавки.<br />
                            Каждая партия подоконников <b>BRUSBOX</b> проходит испытания на стойкость к удару. Можно без опасения вставать на подоконник при мытье окон или ставить на него тяжелые предметы.<br />
                            Поверхность подоконника <b>BRUSBOX</b> устойчива к выцветанию. Цвет останется ярким и сочным до 70-и лет.
                    </p>
                    <CallMasterBtn />
                    <CallRaschBtn />
                </div>
        </div>
    </MainLayout>
 );
}
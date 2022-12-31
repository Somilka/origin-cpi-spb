import MainLayout from "../../../../layouts/MainLayout";
import CallRaschBtn from "../../../../components/Btns/CallRaschBtn/CallRaschBtn";
import CallMasterBtn from "../../../../components/Btns/CallMasterBtn/CallMasterBtn";


export default function Delight() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">Rehau Delight Design</div>
            </div>
            <div className="content">
                {/* <div className="hl flex column"> */}
                    <img src="/static/opens/rehau/rehau_blitz.png" className="f3 mobile-full" alt="" />
                {/* </div> */}
                <div className="st3 mobile-full flex column jcsb h100">
                    <h3>Технические характеристики Delight:</h3>
                    <ul>
                        <li>Системная глубина и число камер — 70 мм/5.</li>
                        <li>Высокая защита от взломов. Она обеспечивается установкой специальных устройств запирания. Их преимущество заключается в смещении оси паза приборов.</li>
                        <li>Увеличенная светопрозрачность.</li>
                        <li>Теплоизоляция высшего уровня достигается за счет монтажа стеклопакета толщиной до 41 мм и инновационной обработки стекла.</li>
                        <li>Отличную водонепроницаемость, защиту от пыли, сквозняков и шума обеспечивают уплотнители, установленные внахлест по 7 и 8 мм снаружи и внутри конструкции.</li>
                        <li>Используемый пластик и другие материалы конструкции соответствует европейским стандартам качества.</li>
                    </ul>
                    <div>Естественный свет в помещении создает комфортную атмосферу, придает легкость и воздушность дизайну интерьера. Источник дневного освещения в комнате — окна. Чем они больше, тем светлее, но в помещениях с большими окнами часто происходит потеря тепла. В связи с этим нередко проекты не используют габаритные оконные разъемы. Металлопластиковая конструкция <b>Rehau Delight Design</b> легко решает проблему энергосбережения, позволяя сохранить тепло и обеспечивая максимальное проникновение в здания естественного света.</div>
                    <CallMasterBtn />
                    <CallRaschBtn />
                </div>
            </div>
        </MainLayout>
    );
};

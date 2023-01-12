import MainLayout from "../../../../layouts/MainLayout";
import Slider from "/components/Slider/Slider";

export default function AntiTerror4() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">
                Противотаранное устройство «СКАЛА-4.П» АТ.ПТУ.00.001
                </div>
            </div>
            <div className="content">
                <div className="flex column full bigger-gap">
                    <p>ТУ 25.11.23-062-52435457-2017</p>
                </div>

                <div className="flex hl aic jcc h100">
                    <img className="ha" style={{ maxWidth: '450px' }} src="/static/opens/atlant/anti-terror/anti-terror-4/anti-terror.jpg" alt="" />
                </div>
                <div className="hr flex column bigger-gap">
                    <p>Противотаранное устройство АТ.ПТУ. представляет собой распашные двустворчатые ворота, обеспечивающее высочайшую степень защиты от несанкционированного проезда железнодорожных транспортных средств.<br />
                        Противотаранное устройство изготавливаются как с ручным, так и с автоматическим приводом.</p>
                    <p>Противотаранное устройство способны выдержать прямой таранный удар поезда массой 80 т, движущегося на скорости 20 км/ч.</p>
                    <p>Противотаранное устройство состоит из двух массивных стоек, на которых закреплены блокирующие элементы (створки).</p>
                    <p>Стойки монтируются на фундаменте на месте установки болтами на анкерных корзинах, входящих в комплект поставки. Блокирующие элементы выполнены из стали и изготавливаются на расчетную нагрузку.</p>
                </div>
            </div>
            <Slider>
                <img src="/static/opens/atlant/anti-terror/anti-terror-4/slides/slide1.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/anti-terror/anti-terror-4/slides/slide2.jpg" alt="" className="slide" />
            </Slider>
        </MainLayout >
    );
};

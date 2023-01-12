import MainLayout from "../../../../layouts/MainLayout";
import Slider from "/components/Slider/Slider";

export default function AntiTerror3() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">
                    Кабина поста охраны АТ.КП.ЗЛ(I-III).ПЛ(Бр1-Бр4)
                </div>
            </div>
            <div className="content">
                <div className="flex column full">
                    <p>ТУ 7399-058-52435457-2016</p>
                    <p>ТУ 7399-101-52435457-2016</p>
                </div>

                <div className="flex hl aic jcc h100">
                    <img className="ha" style={{ maxWidth: '350px' }} src="/static/opens/atlant/anti-terror/anti-terror-3/anti-terror.jpg" alt="" />
                </div>
                <div className="hr flex column bigger-gap">
                    <p>Кабина поста охраны служит для наблюдения за территорией, прилегающей к месту установки изделия, и защиты сотрудников безопасности, находящихся внутри изделия от поражения стрелковым оружием и осколками гранат, а так же для ведения ответного огня в случае нападения на объект.</p>
                    <p>Кабина поста охраны состоит из бронепанелей, дверей, бронеокон, передаточных устройств, бойниц. Все элементы кабины, включая входную дверь, выполнены с классом защиты по пулестойкости Бр1-Бр4 в соответствии с ГОСТ Р 51112-97 и классом по взлому I-III в соответствии с ГОСТ Р 51113-97.</p>
                    <p>Кабина поста охраны изготавливается в соответствии с требованиями технического задания заказчика.</p>
                    <div className="flex column">
                        <p>Кабина поста охраны обеспечивает:</p>
                        <ul className="list-tire">
                            <li>круговой обзор для наблюдения за прилегающей территорией за счет повышенной площади бронированного остекления;</li>
                            <li>защиту персонала от пуль стрелкового оружия и осколков гранат;</li>
                            <li>возможность подачи сигнала тревоги часовым в случае нападения на охраняемый объект;</li>
                            <li>возможность ведения кругового оборонительного боя.</li>
                        </ul>
                    </div>
                    <div className="flex column">
                        <p>Кабина поста охраны оборудована:</p>
                        <ul className="list-tire">
                            <li>бронированными дверями с механическими и электромагнитными замками и сигнализацией;</li>
                            <li>электроснабжением;</li>
                            <li>двусторонней телефонной связью;</li>
                            <li>охранной и пожарной сигнализацией;</li>
                            <li>светозвуковой сигнализацией;</li>
                            <li>приборами электроотопления и вентиляции;</li>
                            <li>молниезащитой;</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Slider>
                <img src="/static/opens/atlant/anti-terror/anti-terror-3/slides/slide1.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/anti-terror/anti-terror-3/slides/slide2.jpg" alt="" className="slide" />
            </Slider>
        </MainLayout >
    );
};

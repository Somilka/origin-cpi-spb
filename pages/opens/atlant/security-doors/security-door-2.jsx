import MainLayout from "../../../../layouts/MainLayout";
import Slider from "/components/Slider/Slider";

export default function SecurityDoor2() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">
                АТ.Д.ВЗ(1,05).ЗЛ(2).ПЛ(Бр3).П(60).С(20)
                </div>
            </div>
            <div className="content">
                <div className="flex column full bigger-gap">
                    <div>
                        <ol className="list-no-point">
                            <li>с сигнализацией</li>
                            <li>с блокирующим устройством</li>
                            <li>с сигнализацией и блокирующим устройством</li>
                            <li>с системой контроля управления доступом (СКУД)</li>
                            <li>с электроприводом</li>
                        </ol>
                        <p>Без индекса - без дополнительных устройств</p>
                    </div>
                </div>
                <div className="hl flex column jcc h100">
                    <img className="" src="/static/opens/atlant/security-doors/security-door2/security-door2-1.jpg" alt="" />
                </div>
                <div className="hr flex column bigger-gap">
                    <p>
                        Дверь защитная:
                        АТ.Д.ВЗ(1,05).ЗЛ(2).ПЛ(Бр3).П(60).С(20) по ТУ 7399-273-52435457-2014<br />
                        АТ.Д.ВЗ(1,05).ЗЛ(2).ПЛ(Бр4).П(60).С(20) по ТУ 25.11.23-054-52435457-2019, где:<br />
                        1,05 – эквивалентная статическая нагрузка, МПа;<br />
                        2; 3 – класс взломостойкости;<br />
                        Бр3; Бр4 – класс пулестойкости;<br />
                        60 – предел огнестойкости, мин;<br />
                        20 – сейсмоударостойкость, g,<br />
                        предназначена для защиты входных проемов от поражающих факторов обычного и техногенного взрыва.
                    </p>
                    <div>
                        <p>
                            Дверь выпускается в шести исполнениях:
                        </p>
                        <ul className="list-tire">
                            <li>без дополнительных устройств - без индекса</li>
                            <li>с установленным узлом сигнализации, индекс «1»;</li>
                            <li>с установленным блокирующим устройством, индекс «2»;</li>
                            <li>с опечатывающим устройством, индекс «3»;</li>
                            <li>с системой контроля управления доступом (СКУД), индекс «4»;</li>
                            <li>с электроприводом, индекс «5»;</li>
                        </ul>
                    </div>
                    <div>
                        <p>
                            Характеристики:
                        </p>
                        <ul className="list-tire">
                            <li>принцип открывания распашной;</li>
                            <li>способ открывания вручную, снаружи и изнутри;</li>
                            <li>направление открывания – левое, правое;</li>
                            <li>установка в вертикальном положении.</li>
                        </ul>
                    </div>
                    <div>
                        <p>
                            Двери защитные состоят из следующих основных элементов:
                        </p>
                        <ul className="list-tire">
                            <li>полотна;</li>
                            <li>рамы;</li>
                        </ul>
                    </div>

                </div>
            </div>
            <Slider>
                <img src="/static/opens/atlant/security-doors/security-door2/slides/slide1.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/security-doors/security-door2/slides/slide2.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/security-doors/security-door2/slides/slide3.jpg" alt="" className="slide" />
            </Slider>
        </MainLayout >
    );
};

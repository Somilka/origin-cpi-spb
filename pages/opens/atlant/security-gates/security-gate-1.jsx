import MainLayout from "../../../../layouts/MainLayout";
import Slider from "/components/Slider/Slider";

export default function SecurityGate1() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">
                    АТ.ВР.ВЗ(1,05).ЗЛ(2).ПЛ(Бр3).С(20)
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

                <div className="flex hl aic jcc h100">
                    <img className="ha" style={{ maxWidth: '400px' }} src="/static/opens/atlant/security-gates/security-gate-1/security-gate.jpg" alt="" />
                </div>
                <div className="hr flex column bigger-gap">
                    <p>
                        Ворота защитные:<br />
                        АТ.ВР.ВЗ(1,05).ЗЛ(2).ПЛ(Бр3).С(20) по ТУ 7399-333-52435457-2014 ;<br />
                        АТ.ВР.ВЗ(1,05).ЗЛ(3).ПЛ(Бр4).С(20);<br />
                        АТ.ВР.ВЗ(1,05).ЗЛ(3).ПЛ(Бр5).С(20), где:<br />
                        1,05 – эквивалентная статическая нагрузка, МПа;<br />
                        2; 3  – класс взломостойкости;<br />
                        Бр3; Бр4; Бр5 – класс пулестойкости;<br />
                        20 – сейсмоударостойкость, g,<br />
                        предназначены для защиты транспортных проемов от поражающих факторов обычного и техногенного взрыва.
                    </p>
                    <div>
                        <p>
                            Ворота выпускаются в шести исполнениях:
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
                            Ворота  защитные состоят из следующих основных элементов:
                        </p>
                        <ul className="list-tire">
                            <li>рамы;</li>
                            <li>полотна правого;</li>
                            <li>полотна левого.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Slider>
                <img src="/static/opens/atlant/security-gates/security-gate-1/slides/slide1.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/security-gates/security-gate-1/slides/slide2.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/security-gates/security-gate-1/slides/slide3.jpg" alt="" className="slide" />
            </Slider>
        </MainLayout >
    );
};

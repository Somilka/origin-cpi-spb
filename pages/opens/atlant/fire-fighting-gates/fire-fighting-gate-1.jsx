import MainLayout from "../../../../layouts/MainLayout";
import Slider from "/components/Slider/Slider";

export default function FireFightingGate1() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">
                    АТ.ВР.П(EI30,60,90).С(20) с калиткой
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
                    <img className="ha" style={{ maxWidth: '400px' }} src="/static/opens/atlant/fire-fighting-gates/fire-fighting-gate-1/img1.jpg" alt="" />
                </div>
                <div className="hr flex column bigger-gap">
                    <p>
                        Ворота противопожарные с калиткой (без калитки):<br />
                        АТ.ВР.П(EI30).С(20) взамен АТ.БР.ВР.ПР.001;<br />
                        АТ.ВР.П(EI60).С(20) взамен АТ.БР.ВР.ПР.002;<br />
                        АТ.ВР.П(EI90).С(20) взамен АТ.БР.ВР.ПР.003; по ТУ 25.11.23-276-52435457-2014, где:<br />
                        EI 30; EI 60; EI 60  – предел огнестойкости, мин;<br />
                        20 – сейсмоударостойкость, g,<br />
                        предназначены для установки в транспортные проемы. Предотвращают распространение огня и дыма в процессе пожара в прилегающие помещения.
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
                            Ворота состоят из следующих основных элементов:
                        </p>
                        <ul className="list-tire">
                            <li>полотен;</li>
                            <li>рамы.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Slider>
                <img src="/static/opens/atlant/fire-fighting-gates/fire-fighting-gate-1/slides/slide1.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/fire-fighting-gates/fire-fighting-gate-1/slides/slide2.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/fire-fighting-gates/fire-fighting-gate-1/slides/slide3.jpg" alt="" className="slide" />
            </Slider>
        </MainLayout >
    );
};

import MainLayout from "../../../../layouts/MainLayout";
import Slider from "/components/Slider/Slider";

export default function FireFightingGate1() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">
                    АТ.ВР.П(EI90).С(20) без калитки
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
                    <img className="ha" style={{ maxWidth: '400px' }} src="/static/opens/atlant/fire-fighting-gates/fire-fighting-gate-2.jpg" alt="" />
                </div>
                <div className="hr flex column bigger-gap">
                    <p>
                        АТ.ВР.П(EI90).С(20) взамен по ТУ 25.11.23-276-52435457-2014, где:<br/>
                        EI 90  – предел огнестойкости, мин;<br/>
                        20 – сейсмоударостойкость, g,<br/>
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
        </MainLayout >
    );
};

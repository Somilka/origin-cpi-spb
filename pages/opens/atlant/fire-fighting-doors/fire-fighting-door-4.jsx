import MainLayout from "../../../../layouts/MainLayout";
import Slider from "/components/Slider/Slider";

export default function FireFightingDoor4() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">
                    АТ.Д2.П(EI30,60,90).ДГ(S30,60,90).С(20)
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
                    <img className="ha" style={{ maxWidth: '400px' }} src="/static/opens/atlant/fire-fighting-doors/fire-fighting-door-4/fire-fighting-door.jpg" alt="" />
                </div>
                <div className="hr flex column bigger-gap">
                    <p>
                        Дверь противопожарная дымогазонепроницаемая двустворчатая:<br/>
                        АТ.Д2.П(EI30).ДГ(S30).С(20);<br/>
                        АТ.Д2.П(EI60).ДГ(S60).С(20);<br/>
                        АТ.Д2.П(EI90).ДГ(S90).С(20) по ТУ 25.11.23-007-52435457-2019, где:<br/>
                        EI30; EI60; EI90 – предел огнестойкости, мин;<br/>
                        S30; S60; S90 – дымогазонепроницаемость, мин;<br/>
                        20 – сейсмоударостойкость, g,<br/>
                        предназначена для защиты входных проемов от распространения огня и дыма в процессе пожара.
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
                            <li>рамы.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Slider>
                <img src="/static/opens/atlant/fire-fighting-doors/fire-fighting-door-4/slides/slide1.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/fire-fighting-doors/fire-fighting-door-4/slides/slide2.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/fire-fighting-doors/fire-fighting-door-4/slides/slide3.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/fire-fighting-doors/fire-fighting-door-4/slides/slide4.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/fire-fighting-doors/fire-fighting-door-4/slides/slide5.jpg" alt="" className="slide" />
            </Slider>
        </MainLayout >
    );
};

import MainLayout from "../../../../layouts/MainLayout";
import Slider from "/components/Slider/Slider";

export default function SecurityHermeticHatch1() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">
                    АТ.ЛК.ВЗ(3).Г(4).С(20)
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
                    <img className="ha" style={{ maxWidth: '211px' }} src="/static/opens/atlant/security-hermetic-hatches/security-hermetic-hatch-1/security-hermetic-hatch.jpg" alt="" />
                </div>
                <div className="hr flex column bigger-gap">
                    <p>
                        Люк круглый защитно-герметический АТ.ЛК.ВЗ(3).Г(4).С(20), где:<br />
                        3– эквивалентная статическая нагрузка, МПа<br />
                        4 – герметичность, л/ч;<br />
                        20 – сейсмоударостойкость, g,<br />
                        предназначен для защиты и герметизации входных проемов в специальные фортификационные сооружения.
                    </p>
                    <div>
                        <p>
                            Люк выпускается в шести исполнениях:
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
                            <li>направление открывания – левое, правое получается поворотом люка в плоскости проема на 180° при установке.</li>
                        </ul>
                    </div>
                    <div>
                        <p>
                            Двери защитные состоят из следующих основных элементов:
                        </p>
                        <ul className="list-tire">
                            <li>полотна;</li>
                            <li>рамы;</li>
                            <li>комингса;</li>
                            <li>механизма задраивания.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Slider>
                <img src="/static/opens/atlant/security-hermetic-hatches/security-hermetic-hatch-1/slides/slide1.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/security-hermetic-hatches/security-hermetic-hatch-1/slides/slide2.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/security-hermetic-hatches/security-hermetic-hatch-1/slides/slide3.jpg" alt="" className="slide" />
            </Slider>
        </MainLayout >
    );
};

import MainLayout from "../../../../layouts/MainLayout";
import Slider from "/components/Slider/Slider";

export default function HermeticHatch9() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">
                    АТ.ЛК.С(20)
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
                    <img className="ha" style={{ maxWidth: '211px' }} src="/static/opens/atlant/hermetic-hatches/hermetic-hatch-9/hermetic-hatch.jpg" alt="" />
                </div>
                <div className="hr flex column bigger-gap">
                    <p>
                        Люк-крышка:<br/>
                        АТ.ЛК.С(20) по ТУ 25.11.23-508-52435457-2020, где:<br/>
                        20 – сейсмоударостойкость, g,<br/>
                        предназначен для герметизации входных проемов в специальные фортификационные сооружения.
                    </p>
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
                        </ul>
                    </div>
                </div>
            </div>
            <Slider>
                <img src="/static/opens/atlant/hermetic-hatches/hermetic-hatch-9/slides/slide1.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/hermetic-hatches/hermetic-hatch-9/slides/slide2.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/hermetic-hatches/hermetic-hatch-9/slides/slide3.jpg" alt="" className="slide" />
            </Slider>
        </MainLayout >
    );
};

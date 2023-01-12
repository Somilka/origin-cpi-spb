import MainLayout from "../../../../layouts/MainLayout";
import Slider from "/components/Slider/Slider";

export default function Shield5() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">
                    АТ.Щ.Г(10).П(EI60).ДГ(S60).С(20) с люком
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
                    <img className="ha" style={{ maxWidth: '450px' }} src="/static/opens/atlant/shields/shield-5/shield.jpg" alt="" />
                </div>
                <div className="hr flex column bigger-gap">
                    <p>
                        Щит герметический противопожарный с люком, АТ.Щ.Г(10).П(EI60).ДГ(S60).С(20) по ТУ 25.11.23-050-52435457-2019, где:<br/>
                        10 – герметичность, л/ч;<br/>
                        EI 30; EI 60; EI 90 – предел огнестойкости, мин;<br/>
                        S 30; S60; S90 - дымогазонепроницаемость, мин;<br/>
                        20 – сейсмоударостойкость, g,<br/>
                        для герметизации проемов в специальных фортификационных сооружениях, а так же служит для защиты от распространения огня и дыма при пожарах.
                    </p>
                    <div>
                        <p>
                            Затвор выпускаются в шести исполнениях:
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
                            <li>принцип открывания щит а- съемный, люка - распашной;</li>
                            <li>способ открывания ручной;</li>
                            <li>установка в вертикальном положении.</li>
                        </ul>
                    </div>
                    <div>
                        <p>
                            Щит состоит из следующих основных элементов:
                        </p>
                        <ul className="list-tire">
                            <li>полотна с люком (без люка);</li>
                            <li>рамы;</li>
                            <li>комингса</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Slider>
                <img src="/static/opens/atlant/shields/shield-5/slides/slide1.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/shields/shield-5/slides/slide2.jpg" alt="" className="slide" />
            </Slider>
        </MainLayout >
    );
};

import MainLayout from "../../../../layouts/MainLayout";
import Slider from "/components/Slider/Slider";

export default function Closure2() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">
                    АТ.З2.ВЗ.(0,5).Г(7).С(60)
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
                    <img className="ha" style={{ maxWidth: '350px' }} src="/static/opens/atlant/closures/closure-2/closure.jpg" alt="" />
                </div>
                <div className="hr flex column bigger-gap">
                    <p>
                        Затвор защитный герметический двустворчатый:<br />
                        АТ.З2.ВЗ.(0,5).Г(7).С(60) по ТУ 25.11.23-074-52435457-2019;<br />
                        АТ.З2.ВЗ.(3).Г(7).С(60) по ТУ 25.11.23-073-52435457-2019;<br />
                        АТ.З2.ВЗ(3,5).Г(7).С(60) по ТУ 25.11.23-071-52435457-2019, где:<br />
                        0,5; 3; 3,5 – эквивалентная статическая нагрузка, МПа;<br />
                        7 – герметичность, л/ч;<br />
                        60 – сейсмоударостойкость, g,<br />
                        предназначен для защиты и герметизации транспортных проемов в специальных фортификационных сооружениях от поражающих факторов ЯВ.
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
                            <li>принцип открывания распашной;</li>
                            <li>способ открывания автоматический при помощи привода;</li>
                            <li>направление открывания – левое, правое;</li>
                            <li>установка в вертикальном положении.</li>
                        </ul>
                    </div>
                    <div>
                        <p>
                            Щит состоит из следующих основных элементов:
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
                <img src="/static/opens/atlant/closures/closure-2/slides/slide1.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/closures/closure-2/slides/slide2.jpg" alt="" className="slide" />
            </Slider>
        </MainLayout >
    );
};

import MainLayout from "../../../../layouts/MainLayout";
import Slider from "/components/Slider/Slider";

export default function SecurityOther2() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">
                    Шлюз герметический АТ.Ш.Г(0,13).С(20)
                </div>
            </div>
            <div className="content">
                <div className="flex hl aic jcc h100">
                    <img className="wa" style={{ height: '450px' }} src="/static/opens/atlant/security-others/security-other-2/security-other-2.jpg" alt="" />
                </div>
                <div className="hr flex column bigger-gap">
                    <p>
                        Шлюз герметический АТ.Ш.Г(0,13).С(20) предназначен для герметизации оконных проемов и служит для передачи мелких предметов с обеспечением шлюзования.
                    </p>
                    <div>
                        <p>
                            Характеристики:
                        </p>
                        <ul className="list-tire">
                            <li>принцип открывания распашной;</li>
                            <li>установка в вертикальном положении.</li>
                        </ul>
                    </div>
                    <div>
                        <p>
                            Окно состоит из следующих основных элементов:
                        </p>
                        <ul className="list-tire">
                            <li>комингса;</li>
                            <li>рамы;</li>
                            <li>двери.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Slider>
                <img src="/static/opens/atlant/security-others/security-other-2/slides/slide1.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/security-others/security-other-2/slides/slide2.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/security-others/security-other-2/slides/slide3.jpg" alt="" className="slide" />
            </Slider>
        </MainLayout >
    );
};

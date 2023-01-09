import MainLayout from "../../../../layouts/MainLayout";
import Slider from "/components/Slider/Slider";

export default function SecurityOther1() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">
                    Окно герметическое смотровое АТ.О.Г(0,07).С(20)
                </div>
            </div>
            <div className="content">
                <div className="flex hl aic jcc h100">
                    <img className="wa" style={{ height: '450px' }} src="/static/opens/atlant/security-others/security-other-1/security-other-1.jpg" alt="" />
                </div>
                <div className="hr flex column bigger-gap">
                    <p>
                        Окно герметическое смотровое АТ.О.Г(0,07).С(20) предназначено для герметизации оконных проемов.
                    </p>
                    <div>
                        <p>
                            Характеристики:
                        </p>
                        <ul className="list-tire">
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
                            <li>стекла.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Slider>
                <img src="/static/opens/atlant/security-others/security-other-1/slides/slide1.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/security-others/security-other-1/slides/slide2.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/security-others/security-other-1/slides/slide3.jpg" alt="" className="slide" />
            </Slider>
        </MainLayout >
    );
};

import MainLayout from "../../../../layouts/MainLayout";
import Slider from "/components/Slider/Slider";

export default function AntiTerror7() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">
                    Блок оконный пулестойкий АТ.БО.ПЛ(Бр2)
                </div>
            </div>
            <div className="content">
                <div className="flex column full">
                    <p>АТ.БО.ПЛ(Бр2);</p>
                    <p>АТ.БО.ПЛ(Бр3);</p>
                    <p>АТ.БО.ПЛ(Бр4);</p>
                    <p>АТ.БО.ПЛ(Бр5)</p>
                </div>

                <div className="flex hl aic jcc h100">
                    <img className="wa" style={{ maxHeight: '450px' }} src="/static/opens/atlant/anti-terror/anti-terror-7/anti-terror.jpg" alt="" />
                </div>
                <div className="hr flex column bigger-gap">
                    <p>
                        Блок оконный пулестойкие:<br />
                        АТ.БО.ПЛ(Бр2);<br />
                        АТ.БО.ПЛ(Бр3);<br />
                        АТ.БО.ПЛ(Бр4);<br />
                        АТ.БО.ПЛ(Бр5), где:<br />
                        Бр2; Бр3; Бр4; Бр5 – класс по пулестойкости.<br />
                        предназначены для защиты оконных проемов от поражения стрелковым оружием.
                    </p>
                    <p>
                        Возможно устанавливать в административных зданиях, банках, укрепленных блокпостах, частных домовладениях и в квартирах многоэтажных домов.
                    </p>
                    <div className="flex column">
                        <p>Характеристики:</p>
                        <ul className="list-tire">
                            <li>глухое;</li>
                            <li>установка в вертикальном положении.</li>
                        </ul>
                    </div>
                    <div className="flex column">
                        <p>Блоки оконные состоят из следующих основных элементов:</p>
                        <ul className="list-tire">
                            <li>рамы;</li>
                            <li>стекла.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Slider>
                <img src="/static/opens/atlant/anti-terror/anti-terror-7/slides/slide1.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/anti-terror/anti-terror-7/slides/slide2.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/anti-terror/anti-terror-7/slides/slide3.jpg" alt="" className="slide" />
            </Slider>
        </MainLayout >
    );
};

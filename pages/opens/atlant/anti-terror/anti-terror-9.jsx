import MainLayout from "../../../../layouts/MainLayout";
import Slider from "/components/Slider/Slider";

export default function AntiTerror9() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">
                    Блок оконный пулестойкий Бр4 глухой в алюминиевом профиле
                </div>
            </div>
            <div className="content">
                <div className="flex column full">
                    <p>АТ.БО.АЛ.Т.ПЛ(Бр4)-теплый,</p>
                    <p>АТ.БО.АЛ.Х.ПЛ(Бр4)-холодный</p>
                </div>
                <div className="flex hl aic jcc h100">
                    <img className="wa" style={{ maxHeight: '450px' }} src="/static/opens/atlant/anti-terror/anti-terror-9/anti-terror.jpg" alt="" />
                </div>
                <div className="hr flex column bigger-gap">
                    <p>
                        Блок оконный пулестойкий Бр4 глухой в алюминиевом профиле АТ.БО.АЛ.Т.ПЛ(Бр4)-теплый,<br/>
                        АТ.БО.АЛ.Х.ПЛ(Бр4)-холодный, где:<br/>
                        Бр4 – класс по пулестойкости.<br/>
                        предназначены для защиты оконных проемов от поражения стрелковым оружием.
                    </p>
                    <p>
                    Возможно устанавливать в административных зданиях, банках, укрепленных блокпостах, частных домовладениях и в квартирах многоэтажных домов.
                    </p>
                    <div className="flex column">
                        <p>Характеристики:</p>
                        <ul className="list-tire">
                            <li>блок глухой;</li>
                            <li>установка в вертикальном положении.</li>
                        </ul>
                    </div>
                    <div className="flex column">
                        <p>Блок оконный состоит из следующих основных элементов:</p>
                        <ul className="list-tire">
                            <li>рамы;</li>
                            <li>стекла.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Slider>
                <img src="/static/opens/atlant/anti-terror/anti-terror-9/slides/slide1.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/anti-terror/anti-terror-9/slides/slide2.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/anti-terror/anti-terror-9/slides/slide3.jpg" alt="" className="slide" />
            </Slider>
        </MainLayout >
    );
};

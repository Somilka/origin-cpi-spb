import MainLayout from "../../../../layouts/MainLayout";
import Slider from "/components/Slider/Slider";

export default function AntiTerror8() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">
                    Блок оконный взрывозащитный пулестойкий АТ.БО.ВЗ.ПЛ(Бр5)
                </div>
            </div>
            <div className="content">
                <div className="flex hl aic jcc h100">
                    <img className="ha" style={{ maxWidth: '450px' }} src="/static/opens/atlant/anti-terror/anti-terror-8/anti-terror.jpg" alt="" />
                </div>
                <div className="hr flex column bigger-gap">
                    <p>
                        Блок оконный взрывозащитный пулестойкий АТ.БО.ВЗ.ПЛ(Бр5), где:<br />
                        Бр5 – класс по пулестойкости.<br />
                        предназначен для защиты оконных проемов от поражающих факторов обычного и техногенного взрыва, а также от поражения стрелковым оружием.
                    </p>
                    <p>
                        Возможно устанавливать в административных зданиях, банках, укрепленных блокпостах.
                    </p>
                    <div className="flex column">
                        <p>Характеристики:</p>
                        <ul className="list-tire">
                            <li>глухое;</li>
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
                <img src="/static/opens/atlant/anti-terror/anti-terror-8/anti-terror-2.jpg" alt="" className="full" />
            </div>
        </MainLayout >
    );
};

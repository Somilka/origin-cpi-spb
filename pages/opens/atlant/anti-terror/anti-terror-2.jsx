import MainLayout from "../../../../layouts/MainLayout";
import Slider from "/components/Slider/Slider";

export default function AntiTerror2() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">
                    Комплекс охранный пулестойкий «Шифр-162» (Вышка АТ.БР.В.002)
                </div>
            </div>
            <div className="content">
                <div className="flex column full bigger-gap">
                    <p>ТУ 25.11.23-041-52435457-2018</p>
                </div>

                <div className="flex hl aic jcc h100">
                    <img className="ha" style={{ maxWidth: '250px' }} src="/static/opens/atlant/anti-terror/anti-terror-2/anti-terror.jpg" alt="" />
                </div>
                <div className="hr flex column bigger-gap">
                    <div className="flex column">
                        <p>Комплекс охранный пулестойкий «Шифр-162» (Вышка) предназначен, для размещения на охраняемых периметрах с целью ведения наблюдения за близлежащими окрестностями и обеспечивает:</p>
                        <ul className="list-tire">
                            <li>возможность кругового обзора часовым подступов к охраняемым объектам в дневное и ночное время суток;</li>
                            <li>защиту часового (личного состава) от поражения стрелковым оружием и осколками гранат, вести ответный круговой оборонительный бой;</li>
                            <li>работу вышки при любых погодных условиях при температуре окружающего воздуха от - 40° до +40°С.</li>
                        </ul>
                    </div>
                    <p>
                        Все элементы изделия, включая входные двери, выполнены с классом защиты по пулестойкости Бр4 в соответствии с ГОСТ Р 51112-97. Вышка оснащена автоматической спусковой системой IC-301 или аналог.
                    </p>
                    <div className="flex column">
                        <p>Основные элементы входящие в состав вышки:</p>
                        <ul className="list-tire">
                            <li>укрытие постовое базовое – АТ.БР.М.003;</li>
                            <li>укрытие постовое базовое с люком – АТ.БР.М.003-01;</li>
                            <li>укрытие постовое наземное – АТ.БР.М.001;</li>
                            <li>каркас несущий – АТ.БР.М.002;</li>
                            <li>каркас несущий с калиткой – АТ.БР.М.002-01;</li>
                            <li>смотровая площадка с люком– АТ.СП.001;</li>
                            <li>лестницы – АТ.ЛЦ.001; АТ.ЛЦ001-01</li>
                            <li>поворотный прожектор ИО-04-1500-010 (2шт).</li>
                        </ul>
                    </div>
                    <p>Вышка представляет собой сборно-разборную конструкцию, состоящую из модулей. Сочетание модулей позволяет собрать вышку в четырех вариантах компоновки.<br/>
Наружное покрытие вышки — износостойкое защитно-декоративное полимерное покрытие, цвет по каталогу RAL. Возможно изготовление вышки с классом защиты от Бр3 до Бр5 или по техническому заданию заказчика.</p>
                </div>
            </div>
            <Slider>
                <img src="/static/opens/atlant/anti-terror/anti-terror-2/slides/slide1.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/anti-terror/anti-terror-2/slides/slide2.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/anti-terror/anti-terror-2/slides/slide3.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/anti-terror/anti-terror-2/slides/slide4.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/anti-terror/anti-terror-2/slides/slide5.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/anti-terror/anti-terror-2/slides/slide6.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/anti-terror/anti-terror-2/slides/slide7.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/anti-terror/anti-terror-2/slides/slide8.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/anti-terror/anti-terror-2/slides/slide9.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/anti-terror/anti-terror-2/slides/slide10.jpg" alt="" className="slide" />
            </Slider>
        </MainLayout >
    );
};

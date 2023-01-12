import MainLayout from "../../../../layouts/MainLayout";
import Slider from "/components/Slider/Slider";

export default function AntiTerror6() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">
                ВЗК-02 «Панцирь» АТ.БР.КАМ.002
                </div>
            </div>
            <div className="content">
                <div className="flex column full">
                    <p>ТУ 7399-274-52435457-2014</p>
                </div>

                <div className="flex hl aic jcc h100">
                    <img className="ha" style={{ maxWidth: '350px' }} src="/static/opens/atlant/anti-terror/anti-terror-6/anti-terror.jpg" alt="" />
                </div>
                <div className="hr flex column bigger-gap">
                    <p>Взрывозащитная камера ВЗК-02 «Панцирь»</p>
                    <p>АТ.БР.КАМ.002</p>
                    <p>Сертификат РОСС.RU.C310.H91011</p>
                    <p>Предназначена для изоляции предметов с подозрением на взрывное устройство.</p>
                    <p>Взрывозащитная камера ВЗК-02 «Панцирь» представляет собой стальное цилиндрическое изделие.</p>
                    <p>Обеспечивает защиту находящихся рядом людей при взрыве до 3-х кг взрывчатого вещества в тротиловом эквиваленте. При сверхрасчетном воздействии происходит локализация взрыва в направлении крышки камеры.</p>
                    <p>Может быть установлена в местах большого скопления людей, где необходимо локализовать подозрительные предметы — метро, аэропорты, торговые центры, парки.</p>
                </div>
            </div>
            <Slider>
                <img src="/static/opens/atlant/anti-terror/anti-terror-6/slides/slide1.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/anti-terror/anti-terror-6/slides/slide2.jpg" alt="" className="slide" />
            </Slider>
        </MainLayout >
    );
};

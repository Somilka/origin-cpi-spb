import MainLayout from "../../../../layouts/MainLayout";
import Slider from "/components/Slider/Slider";

export default function FireFightingDoor1() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">
                    Защитно-оборонительное сооружение Бронеколпак АТ.КЛ.ЗЛ(I).ПЛ(Бр4)
                </div>
            </div>
            <div className="content">
                <div className="flex column full bigger-gap">
                    <p>ТУ 25.11.23-031-52435457-2017</p>
                </div>

                <div className="flex hl aic jcc h100">
                    <img className="ha" style={{ maxWidth: '250px' }} src="/static/opens/atlant/anti-terror/anti-terror-1/anti-terror.jpg" alt="" />
                </div>
                <div className="hr flex column bigger-gap">
                    <p>Защитно-оборонительное сооружение «Бронеколпак» предназначен для использования в составе комплексов технических средств охраны и физической защиты объектов различного назначения. Служит для защиты сотрудников подразделения, находящихся внутри изделия от поражающего воздействия пуль стрелкового оружия и осколочных гранат.</p>
                    <p>Обеспечивает ведение кругового наблюдения за территорией и ведение оборонительного боя с использованием стрелкового оружия из под бронезащиты изделия.</p>
                    <p>Бронеколпак представляет собой цельносварную пулестойкую конструкцию из бронепанелей.</p>
                    <p>Бронеколпак оснащен строповочными элементами для подъема краном.
Дверь изделия открывается наружу и запирается изнутри. Предусмотрена возможность открытия замка снаружи с помощью ключа.</p>
                    <p>В стенах и двери бронеколпака оборудованы 6 бойниц. Конструкция бойниц исключает рикошет пули внутрь кабины.</p>
                    <p>Все элементы изделия, включая входную дверь, выполнены с классом защиты по пулестойкости Бр4 в соответствии с ГОСТ Р 51112-97.</p>
                    <p>Наружное покрытие колпака — износостойкое защитно-декоративное полимерное покрытие, цвет по каталогу RAL.</p>
                </div>
            </div>
            <Slider>
                <img src="/static/opens/atlant/anti-terror/anti-terror-1/slides/slide1.jpg" alt="" className="slide" />
                <img src="/static/opens/atlant/anti-terror/anti-terror-1/slides/slide2.jpg" alt="" className="slide" />
            </Slider>
        </MainLayout >
    );
};

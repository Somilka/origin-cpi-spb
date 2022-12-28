import MainLayout from "../../layouts/MainLayout";
import Link from "next/link";
import OpensCategories from "../../components/OpensCategories";

import { useState } from "react";

export default function PVH() {
    const [winNav, setWinNav] = useState(1);

    // const OpensCategories = [
    //     {
    //         id: 0,
    //         title: "Общее",
    //         link: "/opens",
    //     },
    //     {
    //         id: 1,
    //         title: "Окна ПВХ",
    //         link: "/opens/pvh",
    //     },
    //     {
    //         id: 2,
    //         title: "Алюминиевые окна",
    //         link: "/opens/alum",
    //     },
    //     // {
    //     //     id: 3,
    //     //     title: "Деревянные окна",
    //     //     link: "/opens/wooden",
    //     // },
    //     {
    //         id: 4,
    //         title: "Противопожарные двери и окна",
    //         link: "/opens/fire-fighting",
    //     },
    // ];

    return (
        <MainLayout>
            <div className="content">
                <div className="win-nav">
                    <OpensCategories winNav={winNav} />
                    {/* {OpensCategories.map(({ id, title, link }, i) => (
                        <Link key={id} href={link}>
                            <div
                                className={
                                    winNav == id
                                        ? "win-nav-item selected"
                                        : "win-nav-item"
                                }
                                onClick={() => {
                                    setWinNav(id);
                                }}
                            >
                                {title}
                            </div>
                        </Link>
                    ))} */}
                </div>
            </div>
            <div className="content">
                <div className="title">Окна ПВХ</div>
            </div>
            <div className="content">
                <Link href="/opens/pvh/rehau">
                    <div className="window-pvh-card">
                        <div className="window-pvh-card-title">Rehau</div>
                        <div className="window-pvh-card-que">
                            Почему стоит приобрести пластиковые окна Rehau?
                        </div>
                        <div className="window-pvh-card-text">
                            Эстетичность. Продукция компании — это не только
                            надежность, но и разнообразие форм и конфигураций:
                            от прямоугольной до трапециевидной. Вместе с тем
                            официальный завод-производитель предлагает
                            широчайший выбор цветов – более 50 расцветок под
                            заказ.
                            <br />
                            Экологичность. Все ПВХ-окна Rehau, включая продукцию
                            по доступной стоимости, на 100% безопасны для
                            окружающей среды и обитателей помещения.
                            Производство поливинилхлорида основано на технологии
                            полимеризации винила, который в свою очередь
                            представляет собой продукт синтеза хлора. Кроме
                            того, изделия из этого материала поддаются вторичной
                            переработке.
                            <br />
                            Отличные эксплуатационные характеристики. Монтаж
                            окна Rehau обеспечивает тишину в помещении, что
                            является его одним из ключевых преимуществ. Это
                            реализовано благодаря высокой плотности притвора,
                            звукоизоляционных качеств профиля и специально
                            разработанным уплотнителям. При этом стоит отметить,
                            что устанавливать данные окна можно в регионах, где
                            температура находится в диапазоне от –50 до +80 °С.
                            <br />
                            Защита от взлома. Светопрозрачные конструкции,
                            изготовление которых осуществляет немецкий концерн
                            Rehau, устойчивы к механическим воздействиям и
                            совместимы с наиболее популярными марками фурнитуры.
                            Для обеспечения безопасности оконные конструкции
                            этого бренда могут быть укомплектованы
                            противовзломными элементами.
                        </div>
                    </div>
                </Link>
                <Link href="/opens/pvh/veka">
                    <div className="window-pvh-card">
                        <div className="window-pvh-card-title">VEKA</div>
                        <div className="window-pvh-card-que">
                            Почему стоит купить окна «Века»?
                        </div>
                        <div className="window-pvh-card-text">
                            Собственный тест-центр. Штаб-квартира компании,
                            расположенная в Германии, имеет в своей структуре
                            испытательное подразделение. Ведущие немецкие
                            инженеры почти половину века постоянно работают над
                            улучшением эксплуатационных характеристик и
                            потребительских свойств светопрозрачных конструкций.
                            Это позволяет бренду Veka предлагать одни из лучших
                            и при этом доступных по цен окон, представленных на
                            рынке СПб и Ленинградской области.
                            <br />
                            Безупречное качество. При производстве окон
                            используются материалы, имеющие повышенные
                            прочностные характеристики. Постоянный контроль на
                            каждом этапе изготовления продукции позволяет
                            гарантировать практичность и долговечность каждого
                            отдельно взятого профиля. Окна Veka впечатляют
                            уровнем шумоизоляции и сведенной к минимуму
                            теплопроводностью.
                            <br />
                            Ориентация на сложные климатические условия.
                            Завод-производитель изготавливает продукцию с учетом
                            климатических особенностей того региона, где они
                            будут установлены. Светопрозрачные конструкции,
                            выпускаемые концерном, подходят для эксплуатации в
                            условиях повышенной влажности при температуре от
                            -50°С до + 80°С. Это значит, что пластиковые окна
                            «Века» полностью адаптированы к погодным
                            особенностям Санкт-Петербурга и всего
                            северо-западного региона России.
                            <br />
                            Экологическая безопасность. Окна Veka производят на
                            основе качественного ПВХ. Светопрозрачные
                            конструкции не содержат тяжелых металлов, которые
                            отрицательно влияют на самочувствие человека. Это
                            позволяет монтировать окна в жилых домах, в
                            медучреждениях и детских образовательных центрах.
                        </div>
                    </div>
                </Link>
                <Link href="/opens/pvh/brusbox">
                    <div className="window-pvh-card">
                        <div className="window-pvh-card-title">Brusbox</div>
                        <div className="window-pvh-card-que">
                            Почему стоит рассмотреть окна Brusbox?
                        </div>
                        <div className="window-pvh-card-text">
                            <b>BRUSBOX</b> — принципиально новая разработка,
                            качественный профиль ПВХ, сделанный в России и для
                            России, на основе уникального комплекса технологий и
                            собственного практического опыта производства
                            металлопластиковых окон.
                            <br />
                            Основной целью разработки было создание сырья и
                            комплектующих для оптимального производства самых
                            современных окон — профиль ПВХ, фурнитура,
                            армирование и т.д. Мы учли все конструктивные
                            недостатки материала для производства
                            светопрозрачных конструкций, существующих на
                            российском рынке, и внесли в них все необходимые
                            изменения.
                            <br />
                            Мы стали гибкими, стабильными, экономически
                            выгодными партнёрами для отечественного
                            переработчика — производителя окон. Создав профиль
                            нового поколения, мы существенно снизили его
                            стоимость, сократили сроки производства и поставки
                            этого материала потребителю.
                            <br />
                            Гарантии качества
                            <br />В лаборатории контроля качества профиля
                            проводятся испытания образцов продукции в
                            соответствии с системой ГОСТов. Испытывается
                            прочность сварного шва, полученного при соединении
                            двух кусков профиля. Профиль испытывается на ударную
                            вязкость.
                        </div>
                    </div>
                </Link>
                <Link href="/opens/pvh/ivaper62">
                    <div className="window-pvh-card">
                        <div className="window-pvh-card-title">IVAPER 62</div>
                        <div className="window-pvh-card-text">
                            Пластиковые окна из ПВХ профиля IVAPER 62 отлично
                            зарекомендовали себя в различных климатических
                            условиях России. Опыт показывает, окна из профиля
                            IVAPER 62 универсальны. Они прекрасно подходят для
                            остекления новостроек, для замены окон в старом
                            жилом фонде, для летних дач и для загородных домов.
                            Монтажная глубина 62 мм — больше, чем у основных
                            конкурентных систем в этом классе оконных профилей!
                        </div>
                    </div>
                </Link>
            </div>
        </MainLayout>
    );
}

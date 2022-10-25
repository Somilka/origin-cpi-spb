export default function WinsMain() {
    return (
        <div className="windows-main">
            <div className="content">
                <div className="title">Окна</div>
            </div>
            <div className="block">
                <div className="content">
                    <div className="f3 card static bigger-gap h100">
                        <h3 className="w100 tac">Пластиковые окна</h3>
                        <img
                            src="/static/opens/veka/veka_euroline.png"
                            alt=""
                        />
                        <div className="flex column ais">
                            <div className="card static wa">Veka</div>
                            <div className="card static wa">Rehau</div>
                            <div className="card static wa">Brusbox</div>
                        </div>
                    </div>
                    <div className="s3 card static bigger-gap h100">
                        <h3 className="w100 tac">Алюминивые окна</h3>
                        <img src="/static/opens/rehau/rehau3.jpg" alt="" />
                        <div className="flex column ais">
                            <div className="card static wa">Перегородки</div>
                            <div className="card static wa">Фасады</div>
                            <div className="card static wa">Купала</div>
                        </div>
                    </div>
                    <div className="t3 card static bigger-gap h100">
                        <h3 className="w100 tac">Деревянные окна</h3>
                        <img
                            src="/static/opens/brusbox/brusbox_60-4-mini.png"
                            alt=""
                        />
                        <div className="flex column ais">
                            <div className="card static wa">
                                Дерево-алюминиевые
                            </div>
                            <div className="card static wa">Деревянные</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <h2 className="full tac">Самые популярные профили</h2>
                <div className="f3 flex column aie">
                    <h3 style={{ alignSelf: "start" }}>Veka Euroline 58</h3>
                    <img src="/static/dev_logo.png" alt="" />
                    <div className="cost">от 30 300 руб.</div>
                    <div className="btn">Подробнее</div>
                </div>
                <div className="s3 flex column aie">
                    <h3 style={{ alignSelf: "start" }}>Rehau GENEO</h3>
                    <img src="/static/dev_logo.png" alt="" />
                    <div className="cost">от 16 900 руб.</div>
                    <div className="btn">Подробнее</div>
                </div>
                <div className="t3 flex column aie">
                    <h3 style={{ alignSelf: "start" }}>Brusbox 60-4</h3>
                    <img src="/static/dev_logo.png" alt="" />
                    <div className="cost">от 77 777 руб.</div>
                    <div className="btn">Подробнее</div>
                </div>
            </div>
            <div className="content">
                <h2 className="full tac">Варианты остекления</h2>
                <img src="/static/opens/glazing_options.png" alt="" className="full" />
            </div>
        </div>
    );
}

import MainLayout from "../../layouts/MainLayout";
import { useState } from "react";
import Link from "next/dist/client/link";

export default function FireFighting() {
    const [winNav, setWinNav] = useState(4);

    const OpensCategories = [
        {
            id: 0,
            title: "Общее",
            link: "/opens",
        },
        {
            id: 1,
            title: "Окна ПВХ",
            link: "/opens/pvh",
        },
        {
            id: 2,
            title: "Алюминиевые окна",
            link: "/opens/alum",
        },
        {
            id: 3,
            title: "Деревянные окна",
            link: "/opens/wooden",
        },
        {
            id: 4,
            title: "Противопожарные двери и окна",
            link: "/opens/fire-fighting",
        },
    ];

    return (
        <MainLayout>
            <div className="content">
                <div className="win-nav">
                    {OpensCategories.map(({ id, title, link }, i) => (
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
                    ))}
                </div>
            </div>
            <div className="content">
                <div className="title">Противопожарные двери и окна</div>
            </div>
            <div className="content">
                <div className="hl flex column">
                    <h3>Противопожарные двери однопольные</h3>
                    <img
                        className="img-ff"
                        src="/static/opens/FF/FF1.jpg"
                        alt=""
                    />
                    <h3 className="cost">От 8 800 руб.</h3>
                </div>
                <div className="hr flex column">
                    <h3>Противопожарные двери двупольные</h3>
                    <img
                        className="img-ff"
                        src="/static/opens/FF/FF2.jpg"
                        alt=""
                    />
                    <h3 className="cost">От 12 100 руб.</h3>
                </div>
            </div>
            <div className="content">
                <div className="hl flex column">
                    <h3>Противопожарные двери (остекленные) однопольные</h3>
                    <img
                        className="img-ff"
                        src="/static/opens/FF/FF3.jpg"
                        alt=""
                    />
                    <h3 className="cost">От 11 000 руб.</h3>
                </div>
                <div className="hr flex column">
                    <h3>Противопожарные двери (остекленные) двупольные</h3>
                    <img
                        className="img-ff"
                        src="/static/opens/FF/FF4.jpg"
                        alt=""
                    />
                    <h3 className="cost">От 15 400 руб.</h3>
                </div>
            </div>
            <div className="content">
                <div className="hl flex column">
                    <h3>Двери противопожарные технические</h3>
                    <img
                        className="img-ff"
                        src="/static/opens/FF/FF5.jpg"
                        alt=""
                    />
                    <h3 className="cost">От 8 800 руб.</h3>
                </div>
                <div className="hr flex column">
                    <h3>Люки противопожарные</h3>
                    <img
                        className="img-ff"
                        src="/static/opens/FF/FF6.jpg"
                        alt=""
                    />
                    <h3 className="cost">От 7 700 руб.</h3>
                </div>
            </div>
            <div className="content">
                <div className="hl flex column">
                    <h3>Двери противопожарные бронированные</h3>
                    <img
                        className="img-ff"
                        src="/static/opens/FF/FF7.jpg"
                        alt=""
                    />
                    <h3 className="cost">От 20 900 руб.</h3>
                </div>
                <div className="hr flex column">
                    <h3>Ворота противопожарные</h3>
                    <img
                        className="img-ff"
                        src="/static/opens/FF/FF8.jpg"
                        alt=""
                    />
                    <h3 className="cost">От 27 500 руб.</h3>
                </div>
            </div>
        </MainLayout>
    );
}

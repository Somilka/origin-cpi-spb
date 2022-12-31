import MainLayout from "../../layouts/MainLayout";
import { useState } from "react";
import Link from "next/dist/client/link";
import OpensCategories from "../../components/OpensCategories";

export default function FireFighting() {
    const [winNav, setWinNav] = useState(4);

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
                <div className="title">Противопожарные двери и окна</div>
            </div>
            <div className="content">
                <Link href="/opens/fire-fighting/single-field">
                    <div className="hl flex column hoverable h100 jcsb aic">
                        <h3 className="tac">Противопожарные двери однопольные</h3>
                        <img
                            className="img-ff"
                            src="/static/opens/FF/FF1.jpg"
                            alt=""
                        />
                        <h3 className="cost">От 8 800 руб.</h3>
                    </div>
                </Link>
                <Link href="/opens/fire-fighting/double-field">
                    <div className="hr flex column hoverable h100 jcsb aic">
                        <h3 className="tac">Противопожарные двери двупольные</h3>
                        <img
                            className="img-ff"
                            src="/static/opens/FF/FF2.jpg"
                            alt=""
                        />
                        <h3 className="cost">От 12 100 руб.</h3>
                    </div>
                </Link>
            </div>
            <div className="content">
                <Link href="/opens/fire-fighting/single-field-glazed">
                    <div className="hl flex column hoverable h100 jcsb aic">
                        <h3 className="tac">Противопожарные двери (остекленные) однопольные</h3>
                        <img
                            className="img-ff"
                            src="/static/opens/FF/FF3.jpg"
                            alt=""
                        />
                        <h3 className="cost">От 11 000 руб.</h3>
                    </div>
                </Link>
                <Link href="/opens/fire-fighting/double-field-glazed">
                    <div className="hr flex column hoverable h100 jcsb aic">
                        <h3 className="tac">Противопожарные двери (остекленные) двупольные</h3>
                        <img
                            className="img-ff"
                            src="/static/opens/FF/FF4.jpg"
                            alt=""
                        />
                        <h3 className="cost">От 15 400 руб.</h3>
                    </div>
                </Link>
            </div>
            <div className="content">
                <Link href="/opens/fire-fighting/technic">
                    <div className="hl flex column hoverable h100 jcsb aic">
                        <h3 className="tac">Двери технические</h3>
                        <img
                            className="img-ff"
                            src="/static/opens/FF/FF5.jpg"
                            alt=""
                        />
                        <h3 className="cost">От 8 800 руб.</h3>
                    </div>
                </Link>
                <Link href="/opens/fire-fighting/lukes">
                    <div className="hr flex column hoverable h100 jcsb aic">
                        <h3 className="tac">Люки противопожарные</h3>
                        <img
                            className="img-ff"
                            src="/static/opens/FF/FF6.jpg"
                            alt=""
                        />
                        <h3 className="cost">От 7 700 руб.</h3>
                    </div>
                </Link>
            </div>
            <div className="content">
                <Link href="/opens/fire-fighting/armored">
                    <div className="hl flex column hoverable h100 jcsb aic">
                        <h3 className="tac">Двери противопожарные бронированные</h3>
                        <img
                            className="img-ff"
                            src="/static/opens/FF/FF7.jpg"
                            alt=""
                        />
                        <h3 className="cost">От 20 900 руб.</h3>
                    </div>
                </Link>
                <Link href="/opens/fire-fighting/gates">
                    <div className="hr flex column hoverable h100 jcsb aic">
                        <h3 className="tac">Ворота противопожарные</h3>
                        <img
                            className="img-ff"
                            src="/static/opens/FF/FF8.jpg"
                            alt=""
                        />
                        <h3 className="cost">От 27 500 руб.</h3>
                    </div>
                </Link>
            </div>
        </MainLayout>
    );
}

import { useState } from "react";
import Link from "next/link";

export default function OpensCategories(props) {
    const [winNav, setWinNav] = useState(props.winNav);

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
            // {
            //     id: 3,
            //     title: "Деревянные окна",
            //     link: "/opens/wooden",
            // },
            {
                id: 4,
                title: "Противопожарные двери и окна",
                link: "/opens/fire-fighting",
            },
        ];

    return (
        <div className="win-nav">
            {OpensCategories.map(({ id, title, link }, i) => (
                <Link href={link} key={id}>
                    <div
                        className={
                            winNav == id
                                ? "win-nav-item selected"
                                : "win-nav-item"
                        }
                        key={id}
                        onClick={() => {
                            setWinNav(id);
                        }}
                    >
                        {title}
                    </div>
                </Link>
            ))}
        </div>
    );
}

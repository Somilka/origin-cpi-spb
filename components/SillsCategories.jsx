import { useState } from "react";
import Link from "next/link";

export default function SillsCategories(props) {
    const [winNav, setWinNav] = useState(props.winNav);

    const OpensCategories = [
            {
                id: 0,
                title: "BRUSBOX",
                link: "/sills/brusbox/",
            },
            {
                id: 1,
                title: "Каменные",
                link: "/sills/stone/",
            }
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

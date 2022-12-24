import MainLayout from "../../../layouts/MainLayout";
import Link from "next/link";

export default function Rehau() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">Окна Rehau</div>
            </div>
            <div className="content">
                <Link href="/opens/pvh/rehau/grazio">
                    <div className="f3 mob-left card h100 jcsb">
                        <h3 className="tac">
                            GRAZIO
                        </h3>
                        <img src="/static/opens/rehau/rehau1.png" alt="" />
                    </div>
                </Link>
                <Link href="/opens/pvh/rehau/blitz">
                    <div className="s3 mob-right card h100 jcsb">
                        <h3 className="tac">
                            BLITZ
                        </h3>
                        <img src="/static/opens/rehau/rehau2.png" alt="" />
                    </div>
                </Link>
                <Link href="/opens/pvh/rehau/geneo">
                    <div className="t3 mob-left card h100 jcsb">
                        <h3 className="tac">
                            Geneo
                        </h3>
                        <img src="/static/opens/rehau/rehau3.jpg" alt="" />
                    </div>
                </Link>
                <Link href="/opens/pvh/rehau/delight">
                    <div className="f3 mob-right card h100 jcsb">
                        <h3 className="tac">
                            Delight-Design
                        </h3>
                        <img src="/static/opens/rehau/rehau4.jpg" alt="" />
                    </div>
                </Link>
                <Link href="/opens/pvh/rehau/euro-basic">
                    <div className="s3 mob-left card h100 jcsb">
                        <h3 className="tac">
                            Euro-Basic
                        </h3>
                        <img src="/static/opens/rehau/rehau5.png" alt="" />
                    </div>
                </Link>
                <Link href="/opens/pvh/rehau/intelio">
                    <div className="t3 mob-right card h100 jcsb">
                        <h3 className="tac">
                            Intelio
                        </h3>
                        <img src="/static/opens/rehau/rehau6.jpg" alt="" />
                    </div>
                </Link>
            </div>
        </MainLayout>
    );
};

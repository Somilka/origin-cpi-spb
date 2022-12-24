import MainLayout from "../../../layouts/MainLayout";
import Link from "next/link";

export default function Veka() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">Окна Veka</div>
            </div>
            <div className="content">
                <Link href="/opens/pvh/veka/euroline">
                    <div className="f3 mob-left card h100 jcsb">
                        <h3 className="tac">
                            Окна из профиля<br/>Veka Euroline 58
                        </h3>
                        <img src="/static/opens/veka/veka_euroline.png" alt="" />
                    </div>
                </Link>
                <Link href="/opens/pvh/veka/softline70">
                    <div className="s3 mob-right card h100 jcsb">
                        <h3 className="tac">
                            Окна из профиля<br/>Veka Softline 70
                        </h3>
                        <img src="/static/opens/veka/veka_softline_70.png" alt="" />
                    </div>
                </Link>
                <Link href="/opens/pvh/veka/whs">
                    <div className="t3 mob-left card h100 jcsb">
                        <h3 className="tac">
                            Окна из профиля<br/>Veka Whs 60
                        </h3>
                        <img src="/static/opens/veka/veka_whs.png" alt="" />
                    </div>
                </Link>
                <Link href="/opens/pvh/veka/softline82">
                    <div className="s3 mob-right card h100 jcsb">
                        <h3 className="tac">
                            Окна из профиля<br/>Veka Softline 82
                        </h3>
                        <img src="/static/opens/veka/veka_softline_82.png" alt="" />
                    </div>
                </Link>
            </div>
        </MainLayout>
    );
};

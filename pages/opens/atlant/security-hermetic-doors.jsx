import MainLayout from "../../../layouts/MainLayout";
import Link from "next/link";

export default function SecurityDoors() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">Двери защитные</div>
            </div>
            <div className="content">
                <Link href="/opens/atlant/security-doors/security-door-1/">
                    <div className="card f3 flex column h100">
                        <h3 className="tac">АТ.Д.ВЗ(30).С(250)</h3>
                        <img src="/static/dev_logo.png" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/security-doors/security-door-2/">
                    <div className="card s3 flex column h100">
                        <h3 className="tac">АТ.Д.ВЗ(1,05).ЗЛ(2).ПЛ(Бр3)<br />.П(60).С(20)</h3>
                        <img src="/static/dev_logo.png" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/security-doors/security-door-3/">
                    <div className="card t3 flex column h100">
                        <h3 className="tac">АТ.Д.ВЗ(1,05).ЗЛ(2).ПЛ(Бр4)<br />.П(60).С(20)</h3>
                        <img src="/static/dev_logo.png" alt="" />
                    </div>
                </Link>
            </div>
        </MainLayout>
    );
};

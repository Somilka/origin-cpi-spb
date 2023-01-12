
import MainLayout from "../../layouts/MainLayout";
import Link from "next/link";

export default function Atlant() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">Специализированные двери &#171;Атлант&#187;</div>
            </div>
            <div className="content atlant">
                <h2 className="full">Каталог продукции</h2>
                <Link href="/opens/atlant/security-doors/">
                    <div className="card aic f3 mob-left flex column h100">
                        <h3 className="tac">Двери защитные</h3>
                        <img className="wa"  src="/static/opens/atlant/security-doors.png" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/security-hermetic-doors/">
                    <div className="card aic s3 mob-right flex column h100">
                        <h3 className="tac">Двери защитно-герметические</h3>
                        <img className="wa"  src="/static/opens/atlant/security-hermetic-doors.jpg" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/hermetic-doors/">
                    <div className="card aic t3 mob-left flex column h100">
                        <h3 className="tac">Двери герметические</h3>
                        <img className="wa"  src="/static/opens/atlant/hermetic-doors.png" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/fire-fighting-doors/">
                    <div className="card aic f3 mob-right flex column h100">
                        <h3 className="tac">Двери противопожарные</h3>
                        <img className="wa"  src="/static/opens/atlant/fire-fighting-doors.jpg" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/security-hermetic-hatches/">
                    <div className="card aic s3 mob-left flex column h100">
                        <h3 className="tac">Люки защитно-герметические</h3>
                        <img className="wa"  src="/static/opens/atlant/security-hermetic-hatches.png" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/hermetic-hatches/">
                    <div className="card aic t3 mob-right flex column h100">
                        <h3 className="tac">Люки герметические</h3>
                        <img className="wa"  src="/static/opens/atlant/hermetic-hatches.png" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/fire-fighting-hatches/">
                    <div className="card aic f3 mob-left flex column h100">
                        <h3 className="tac">Люки противопожарные</h3>
                        <img className="wa"  src="/static/opens/atlant/fire-fighting-hatches.png" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/security-others/">
                    <div className="card aic s3 mob-right flex column h100">
                        <h3 className="tac">Другие защитные устройства</h3>
                        <img className="wa"  src="/static/opens/atlant/security-others.png" alt="" />
                    </div>
                </Link>
                {/* <Link href="/"> */}
                    <div className="card aic t3 mob-left flex column h100">
                        <h3 className="tac">Затворы</h3>
                        <img className="wa"  src="/static/dev_logo.png" alt="" />
                    </div>
                {/* </Link> */}
                {/* <Link href="/"> */}
                    <div className="card aic f3 mob-right flex column h100">
                        <h3 className="tac">Щиты</h3>
                        <img className="wa"  src="/static/dev_logo.png" alt="" />
                    </div>
                {/* </Link> */}
                <Link href="/opens/atlant/anti-terror/">
                    <div className="card aic s3 mob-left flex column h100">
                        <h3 className="tac">Средства антитеррора</h3>
                        <img className="wa"  src="/static/opens/atlant/anti-terror.png" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/security-gates/">
                    <div className="card aic t3 mob-right flex column h100">
                        <h3 className="tac">Ворота защитные</h3>
                        <img className="wa"  src="/static/opens/atlant/security-gates.jpg" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/hermetic-gates/">
                    <div className="card aic hl flex column">
                        <h3 className="tac">Ворота герметические</h3>
                        <img className="wa"  src="/static/opens/atlant/hermetic-gates.jpg" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/fire-fighting-gates/">
                    <div className="card aic hr flex column">
                        <h3 className="tac">Ворота противопожарные</h3>
                        <img className="wa"  src="/static/opens/atlant/fire-fighting-gates.jpg" alt="" />
                    </div>
                </Link>
            </div>
        </MainLayout>
    );
};

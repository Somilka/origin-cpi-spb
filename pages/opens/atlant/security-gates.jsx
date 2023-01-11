import MainLayout from "../../../layouts/MainLayout";
import Link from "next/link";

export default function SecurityDoors() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">Ворота защитные</div>
            </div>
            <div className="content">
                <Link href="/opens/atlant/security-gates/security-gate-1/">
                    <div className="card jcsb aic hl flex column h100">
                        <div className="flex column">
                            <h3 className="tac">АТ.ВР.ВЗ(1,05).ЗЛ(2).<br/>ПЛ(Бр3).С(20)</h3>
                            <ul className="list-none">
                                <li className="min-text">1 - с сигнализацией</li>
                                <li className="min-text">2 - с блокирующим устройством</li>
                                <li className="min-text">3 - с сигнализацией и блокирующим устройством</li>
                                <li className="min-text">4 - с системой контроля управления доступом</li>
                                <li className="min-text">5 - с электроприводом</li>
                                <li className="min-text">Без индекса - без дополнительных устройств</li>
                            </ul>
                        </div>
                        <img className="ha ofcontain" style={{ maxWidth: '262px' }} src="/static/opens/atlant/security-gates/security-gate-1.jpg" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/security-gates/security-gate-2/">
                    <div className="card jcs aic hr flex column h100">
                        <h3 className="tac">АТ.ВР.ЗЛ(3).ПЛ(БР5).С(20) </h3>
                        <ul className="list-none">
                            <li className="min-text">1 - с сигнализацией</li>
                            <li className="min-text">2 - с блокирующим устройством</li>
                            <li className="min-text">3 - с сигнализацией и блокирующим устройством</li>
                            <li className="min-text">4 - с системой контроля управления доступом</li>
                            <li className="min-text">5 - с электроприводом</li>
                            <li className="min-text">Без индекса - без дополнительных устройств</li>
                        </ul>
                        <img className="ha ofcontain" style={{ maxWidth: '262px' }} src="/static/opens/atlant/security-gates/security-gate-2.jpg" alt="" />
                    </div>
                </Link>
            </div>
        </MainLayout>
    );
};

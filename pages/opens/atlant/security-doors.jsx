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
                    <div className="card jcsb aic f3 mobile-full flex column h100">
                        <div className="flex column">
                            <h3 className="tac">АТ.Д.ВЗ(30).С(250)</h3>
                            <ul className="list-none">
                                <li className="min-text">1 - с сигнализацией</li>
                                <li className="min-text">2 - с блокирующим устройством</li>
                                <li className="min-text">3 - с сигнализацией и блокирующим устройством</li>
                                <li className="min-text">4 - с системой контроля управления доступом</li>
                                <li className="min-text">5 - с электроприводом</li>
                                <li className="min-text">Без индекса - без дополнительных устройств</li>
                            </ul>
                        </div>
                        <img className="ha ofcontain" style={{ width: '262px' }} src="/static/opens/atlant/security-doors/security-door1.jpg" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/security-doors/security-door-2/">
                    <div className="card jcs aic s3 mobile-full flex column h100">
                        <h3 className="tac">АТ.Д.ВЗ(1,05).ЗЛ(2).ПЛ(Бр3)<br />.П(60).С(20)</h3>
                        <ul className="list-none">
                            <li className="min-text">1 - с сигнализацией</li>
                            <li className="min-text">2 - с блокирующим устройством</li>
                            <li className="min-text">3 - с сигнализацией и блокирующим устройством</li>
                            <li className="min-text">4 - с системой контроля управления доступом</li>
                            <li className="min-text">5 - с электроприводом</li>
                            <li className="min-text">Без индекса - без дополнительных устройств</li>
                        </ul>
                        <img className="ha ofcontain" style={{ width: '262px' }} src="/static/opens/atlant/security-doors/security-door2-3.jpg" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/security-doors/security-door-3/">
                    <div className="card jcs aic t3 mobile-full flex column h100">
                        <h3 className="tac">АТ.Д.ВЗ(1,05).ЗЛ(2).ПЛ(Бр4)<br />.П(60).С(20)</h3>
                        <ul className="list-none">
                            <li className="min-text">1 - с сигнализацией</li>
                            <li className="min-text">2 - с блокирующим устройством</li>
                            <li className="min-text">3 - с сигнализацией и блокирующим устройством</li>
                            <li className="min-text">4 - с системой контроля управления доступом</li>
                            <li className="min-text">5 - с электроприводом</li>
                            <li className="min-text">Без индекса - без дополнительных устройств</li>
                        </ul>
                        <img className="ha ofcontain" style={{ width: '262px' }} src="/static/opens/atlant/security-doors/security-door2-3.jpg" alt="" />
                    </div>
                </Link>
            </div>
        </MainLayout>
    );
};

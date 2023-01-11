import MainLayout from "../../../layouts/MainLayout";
import Link from "next/link";

export default function SecurityHermeticDoors() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">Двери защитно-герметические</div>
            </div>
            <div className="content">
                <Link href="/opens/atlant/security-hermetic-doors/security-hermetic-door-1/">
                    <div className="card jcsb aic f3 mobile-full flex column h100">
                        <div className="flex column">
                            <h3 className="tac">АТ.Д.ВЗ(24).<br/>Г(10).С(250)</h3>
                            <ul className="list-none">
                                <li className="min-text">1 - с сигнализацией</li>
                                <li className="min-text">2 - с блокирующим устройством</li>
                                <li className="min-text">3 - с сигнализацией и блокирующим устройством</li>
                                <li className="min-text">4 - с системой контроля управления доступом</li>
                                <li className="min-text">5 - с электроприводом</li>
                                <li className="min-text">Без индекса - без дополнительных устройств</li>
                            </ul>
                        </div>
                        <img className="ha ofcontain" style={{ maxWidth: '262px' }} src="/static/opens/atlant/security-hermetic-doors/security-hermetic-door-1.jpg" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/security-hermetic-doors/security-hermetic-door-2/">
                    <div className="card jcs aic s3 mobile-full flex column h100">
                        <h3 className="tac">АТ.Д.ВЗ(10).<br/>Г(10).С(20).М</h3>
                        <ul className="list-none">
                            <li className="min-text">1 - с сигнализацией</li>
                            <li className="min-text">2 - с блокирующим устройством</li>
                            <li className="min-text">3 - с сигнализацией и блокирующим устройством</li>
                            <li className="min-text">4 - с системой контроля управления доступом</li>
                            <li className="min-text">5 - с электроприводом</li>
                            <li className="min-text">Без индекса - без дополнительных устройств</li>
                        </ul>
                        <img className="ha ofcontain" style={{ maxWidth: '262px' }} src="/static/opens/atlant/security-hermetic-doors/security-hermetic-door-2.jpg" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/security-hermetic-doors/security-hermetic-door-3/">
                    <div className="card jcs aic t3 mobile-full flex column h100">
                        <h3 className="tac">АТ.Д.ВЗ(5).<br/>Г(10).С(20)</h3>
                        <ul className="list-none">
                            <li className="min-text">1 - с сигнализацией</li>
                            <li className="min-text">2 - с блокирующим устройством</li>
                            <li className="min-text">3 - с сигнализацией и блокирующим устройством</li>
                            <li className="min-text">4 - с системой контроля управления доступом</li>
                            <li className="min-text">5 - с электроприводом</li>
                            <li className="min-text">Без индекса - без дополнительных устройств</li>
                        </ul>
                        <img className="ha ofcontain" style={{ maxWidth: '262px' }} src="/static/opens/atlant/security-hermetic-doors/security-hermetic-door-3.jpg" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/security-hermetic-doors/security-hermetic-door-4/">
                    <div className="card jcs aic hl flex column h100">
                        <h3 className="tac">АТ.Д.ВЗ(0,5).Г(10).<br/>П(EI90).ДГ(S90).С(20)</h3>
                        <ul className="list-none">
                            <li className="min-text">1 - с сигнализацией</li>
                            <li className="min-text">2 - с блокирующим устройством</li>
                            <li className="min-text">3 - с сигнализацией и блокирующим устройством</li>
                            <li className="min-text">4 - с системой контроля управления доступом</li>
                            <li className="min-text">5 - с электроприводом</li>
                            <li className="min-text">Без индекса - без дополнительных устройств</li>
                        </ul>
                        <img className="ha ofcontain" style={{ maxWidth: '262px' }} src="/static/opens/atlant/security-hermetic-doors/security-hermetic-door-4.jpg" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/security-hermetic-doors/security-hermetic-door-5/">
                    <div className="card jcs aic hr flex column h100">
                        <h3 className="tac">АТ.Д.ВЗ(10).Г(10)<br/>.С(20).(на уголке)</h3>
                        <ul className="list-none">
                            <li className="min-text">1 - с сигнализацией</li>
                            <li className="min-text">2 - с блокирующим устройством</li>
                            <li className="min-text">3 - с сигнализацией и блокирующим устройством</li>
                            <li className="min-text">4 - с системой контроля управления доступом</li>
                            <li className="min-text">5 - с электроприводом</li>
                            <li className="min-text">Без индекса - без дополнительных устройств</li>
                        </ul>
                        <img className="ha ofcontain" style={{ maxHeight: '242px' }} src="/static/opens/atlant/security-hermetic-doors/security-hermetic-door-5.jpg" alt="" />
                    </div>
                </Link>
            </div>
        </MainLayout>
    );
};

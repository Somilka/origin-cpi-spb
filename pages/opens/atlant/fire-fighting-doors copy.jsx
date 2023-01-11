import MainLayout from "../../../layouts/MainLayout";
import Link from "next/link";

export default function FireFightingDoors() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">Двери противопожарные</div>
            </div>
            <div className="content">
                <Link href="/opens/atlant/fire-fighting-doors/fire-fighting-door-1/">
                    <div className="card jcsb aic f3 mobile-full flex column h100">
                        <div className="flex column">
                            <h3 className="tac">АТ.Д.П(EI30,60,90).<br />С(20) взамен АТ.ПРС.002-004</h3>
                            <ul className="list-none">
                                <li className="min-text">1 - с сигнализацией</li>
                                <li className="min-text">2 - с блокирующим устройством</li>
                                <li className="min-text">3 - с сигнализацией и блокирующим устройством</li>
                                <li className="min-text">4 - с системой контроля управления доступом</li>
                                <li className="min-text">5 - с электроприводом</li>
                                <li className="min-text">Без индекса - без дополнительных устройств</li>
                            </ul>
                        </div>
                        <img className="ha ofcontain" style={{ height: '242px' }} src="/static/opens/atlant/fire-fighting-doors/fire-fighting-door-1.jpg" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/fire-fighting-doors/fire-fighting-door-2/">
                    <div className="card jcsb aic s3 mobile-full flex column h100">
                        <div className="flex column">
                            <h3 className="tac">АТ.Д.П(EI30,60,90).<br />ДГ(S30,60,90).С(20)</h3>
                            <ul className="list-none">
                                <li className="min-text">1 - с сигнализацией</li>
                                <li className="min-text">2 - с блокирующим устройством</li>
                                <li className="min-text">3 - с сигнализацией и блокирующим устройством</li>
                                <li className="min-text">4 - с системой контроля управления доступом</li>
                                <li className="min-text">5 - с электроприводом</li>
                                <li className="min-text">Без индекса - без дополнительных устройств</li>
                            </ul>
                        </div>
                        <img className="ha ofcontain" style={{ height: '242px' }} src="/static/opens/atlant/fire-fighting-doors/fire-fighting-door-2.jpg" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/fire-fighting-doors/fire-fighting-door-3/">
                    <div className="card jcsb aic t3 mobile-full flex column h100">
                        <div className="flex column">
                            <h3 className="tac">АТ.Д2.П(EI30,60,90).<br />С(20) взамен АТ.Д.ПРС2.002-004</h3>
                            <ul className="list-none">
                                <li className="min-text">1 - с сигнализацией</li>
                                <li className="min-text">2 - с блокирующим устройством</li>
                                <li className="min-text">3 - с сигнализацией и блокирующим устройством</li>
                                <li className="min-text">4 - с системой контроля управления доступом</li>
                                <li className="min-text">5 - с электроприводом</li>
                                <li className="min-text">Без индекса - без дополнительных устройств</li>
                            </ul>
                        </div>
                        <img className="ha ofcontain" style={{ height: '242px' }} src="/static/opens/atlant/fire-fighting-doors/fire-fighting-door-3.jpg" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/fire-fighting-doors/fire-fighting-door-4/">
                    <div className="card jcsb aic s3 mobile-full flex column h100">
                        <div className="flex column">
                            <h3 className="tac">АТ.Д2.П(EI30,60,90).<br />ДГ(S30,60,90).С(20)</h3>
                            <ul className="list-none">
                                <li className="min-text">1 - с сигнализацией</li>
                                <li className="min-text">2 - с блокирующим устройством</li>
                                <li className="min-text">3 - с сигнализацией и блокирующим устройством</li>
                                <li className="min-text">4 - с системой контроля управления доступом</li>
                                <li className="min-text">5 - с электроприводом</li>
                                <li className="min-text">Без индекса - без дополнительных устройств</li>
                            </ul>
                        </div>
                        <img className="ha ofcontain" style={{ height: '242px' }} src="/static/opens/atlant/fire-fighting-doors/fire-fighting-door-4.jpg" alt="" />
                    </div>
                </Link>
            </div>
        </MainLayout>
    );
};

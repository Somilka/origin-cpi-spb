import MainLayout from "../../../layouts/MainLayout";
import Link from "next/link";

export default function FireFightingHatches() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">Люки противопожарные</div>
            </div>
            <div className="content">
                <Link href="/opens/atlant/fire-fighting-hatches/fire-fighting-hatch-1/">
                    <div className="card jcsb aic f3 mobile-full flex column h100">
                        <div className="flex column">
                            <h3 className="tac">АТ.Л.П(EI30,60,90).С(20) взамен АТ.Л.ПРС.002-004</h3>
                            <ul className="list-none">
                                <li className="min-text">1 - с сигнализацией</li>
                                <li className="min-text">2 - с блокирующим устройством</li>
                                <li className="min-text">3 - с сигнализацией и блокирующим устройством</li>
                                <li className="min-text">4 - с системой контроля управления доступом</li>
                                <li className="min-text">5 - с электроприводом</li>
                                <li className="min-text">Без индекса - без дополнительных устройств</li>
                            </ul>
                        </div>
                        <img className="ha ofcontain" style={{ height: '242px' }} src="/static/opens/atlant/fire-fighting-hatches/fire-fighting-hatches-1.jpg" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/fire-fighting-hatches/fire-fighting-hatch-2/">
                    <div className="card jcsb aic s3 mobile-full flex column h100">
                        <div className="flex column">
                            <h3 className="tac">АТ.Л2.П(EI30,60,90).<br />С(20).1;2;3;4;5 взамен АТ.Л.ПРС.002-004</h3>
                            <ul className="list-none">
                                <li className="min-text">1 - с сигнализацией</li>
                                <li className="min-text">2 - с блокирующим устройством</li>
                                <li className="min-text">3 - с сигнализацией и блокирующим устройством</li>
                                <li className="min-text">4 - с системой контроля управления доступом</li>
                                <li className="min-text">5 - с электроприводом</li>
                                <li className="min-text">Без индекса - без дополнительных устройств</li>
                            </ul>
                        </div>
                        <img className="ha ofcontain" style={{ height: '242px' }} src="/static/opens/atlant/fire-fighting-hatches/fire-fighting-hatches-2.jpg" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/fire-fighting-hatches/fire-fighting-hatch-3/">
                    <div className="card jcsb aic t3 mobile-full flex column h100">
                        <div className="flex column">
                            <h3 className="tac">АТ.ЛН.П(EI 90).(С20)</h3>
                            <ul className="list-none">
                                <li className="min-text">1 - с сигнализацией</li>
                                <li className="min-text">2 - с блокирующим устройством</li>
                                <li className="min-text">3 - с сигнализацией и блокирующим устройством</li>
                                <li className="min-text">4 - с системой контроля управления доступом</li>
                                <li className="min-text">5 - с электроприводом</li>
                                <li className="min-text">Без индекса - без дополнительных устройств</li>
                            </ul>
                        </div>
                        <img className="ha ofcontain" style={{ height: '242px' }} src="/static/opens/atlant/fire-fighting-hatches/fire-fighting-hatches-3.jpg" alt="" />
                    </div>
                </Link>
            </div>
        </MainLayout>
    );
};

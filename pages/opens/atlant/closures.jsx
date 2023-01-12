import MainLayout from "../../../layouts/MainLayout";
import Link from "next/link";

export default function Closures() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">Затворы</div>
            </div>
            <div className="content">
                <Link href="/opens/atlant/closures/closure-1/">
                    <div className="card jcsb aic f3 mobile-full flex column h100">
                        <div className="flex column">
                            <h3 className="tac">АТ.З.ВЗ.(3,5).<br />Г(10).С(20)</h3>
                            <ul className="list-none">
                                <li className="min-text">1 - с сигнализацией</li>
                                <li className="min-text">2 - с блокирующим устройством</li>
                                <li className="min-text">3 - с сигнализацией и блокирующим устройством</li>
                                <li className="min-text">4 - с системой контроля управления доступом</li>
                                <li className="min-text">5 - с электроприводом</li>
                                <li className="min-text">Без индекса - без дополнительных устройств</li>
                            </ul>
                        </div>
                        <img className="wa ofcontain" style={{ maxHeight: '242px' }} src="/static/opens/atlant/closures/closure-1.jpg" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/closures/closure-2/">
                    <div className="card jcsb aic s3 mobile-full flex column h100">
                        <div className="flex column">
                            <h3 className="tac">АТ.З2.ВЗ.(0,5).<br />Г(7).С(60)</h3>
                            <ul className="list-none">
                                <li className="min-text">1 - с сигнализацией</li>
                                <li className="min-text">2 - с блокирующим устройством</li>
                                <li className="min-text">3 - с сигнализацией и блокирующим устройством</li>
                                <li className="min-text">4 - с системой контроля управления доступом</li>
                                <li className="min-text">5 - с электроприводом</li>
                                <li className="min-text">Без индекса - без дополнительных устройств</li>
                            </ul>
                        </div>
                        <img className="wa ofcontain" style={{ maxHeight: '242px' }} src="/static/opens/atlant/closures/closure-2.jpg" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/closures/closure-3/">
                    <div className="card jcsb aic t3 mobile-full flex column h100">
                        <div className="flex column">
                            <h3 className="tac">АТ.З2.Г(7).С(60)</h3>
                            <ul className="list-none">
                                <li className="min-text">1 - с сигнализацией</li>
                                <li className="min-text">2 - с блокирующим устройством</li>
                                <li className="min-text">3 - с сигнализацией и блокирующим устройством</li>
                                <li className="min-text">4 - с системой контроля управления доступом</li>
                                <li className="min-text">5 - с электроприводом</li>
                                <li className="min-text">Без индекса - без дополнительных устройств</li>
                            </ul>
                        </div>
                        <img className="wa ofcontain" style={{ maxHeight: '242px' }} src="/static/opens/atlant/closures/closure-3.jpg" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/closures/closure-4/">
                    <div className="card jcsb aic s3 mobile-full flex column h100">
                        <div className="flex column">
                            <h3 className="tac">АТ.З.ВЗ(3,5).<br/>Г(10).С(20) с калиткой</h3>
                            <ul className="list-none">
                                <li className="min-text">1 - с сигнализацией</li>
                                <li className="min-text">2 - с блокирующим устройством</li>
                                <li className="min-text">3 - с сигнализацией и блокирующим устройством</li>
                                <li className="min-text">4 - с системой контроля управления доступом</li>
                                <li className="min-text">5 - с электроприводом</li>
                                <li className="min-text">Без индекса - без дополнительных устройств</li>
                            </ul>
                        </div>
                        <img className="wa ofcontain" style={{ maxHeight: '242px' }} src="/static/opens/atlant/closures/closure-4.jpg" alt="" />
                    </div>
                </Link>

            </div>
        </MainLayout>
    );
};

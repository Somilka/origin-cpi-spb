import MainLayout from "../../../layouts/MainLayout";
import Link from "next/link";

export default function SecurityDoors() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">Ворота герметические</div>
            </div>
            <div className="content">
                <Link href="/opens/atlant/hermetic-gates/hermetic-gate-1/">
                    <div className="card jcsb aic hl flex column h100">
                        <div className="flex column">
                            <h3 className="tac">АТ.ВР. Г(19).С(30) двупольные</h3>
                            <ul className="list-none">
                                <li className="min-text">1 - с сигнализацией</li>
                                <li className="min-text">2 - с блокирующим устройством</li>
                                <li className="min-text">3 - с сигнализацией и блокирующим устройством</li>
                                <li className="min-text">4 - с системой контроля управления доступом</li>
                                <li className="min-text">5 - с электроприводом</li>
                                <li className="min-text">Без индекса - без дополнительных устройств</li>
                            </ul>
                        </div>
                        <img className="ha ofcontain" style={{ width: '262px' }} src="/static/opens/atlant/hermetic-gates/hermetic-gates1.jpg" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/hermetic-gates/hermetic-gate-2/">
                    <div className="card jcs aic hr flex column h100">
                        <h3 className="tac">АТ.ВР. Г(19).С(30) однопольные</h3>
                        <ul className="list-none">
                            <li className="min-text">1 - с сигнализацией</li>
                            <li className="min-text">2 - с блокирующим устройством</li>
                            <li className="min-text">3 - с сигнализацией и блокирующим устройством</li>
                            <li className="min-text">4 - с системой контроля управления доступом</li>
                            <li className="min-text">5 - с электроприводом</li>
                            <li className="min-text">Без индекса - без дополнительных устройств</li>
                        </ul>
                        <img className="ha ofcontain" style={{ width: '262px' }} src="/static/opens/atlant/hermetic-gates/hermetic-gates2.jpg" alt="" />
                    </div>
                </Link>
            </div>
        </MainLayout>
    );
};

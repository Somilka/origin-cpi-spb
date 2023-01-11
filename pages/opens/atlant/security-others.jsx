import MainLayout from "../../../layouts/MainLayout";
import Link from "next/link";

export default function SecurityOthers() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">Другие защитные устройства</div>
            </div>
            <div className="content">
                <Link href="/opens/atlant/security-others/security-other-1/">
                    <div className="card jcsb aic f3 mobile-full flex column h100">
                        <h3 className="tac">Окно герметическое смотровое АТ.О.Г(0,07).С(20)</h3>
                        <img className="ha ofcontain" style={{ maxHeight: '242px' }} src="/static/opens/atlant/security-others/security-other-1.jpg" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/security-others/security-other-2/">
                    <div className="card jcsb aic s3 mobile-full flex column h100">
                        <h3 className="tac">Шлюз герметический АТ.Ш.Г(0,13).С(20)</h3>
                        <img className="ha ofcontain" style={{ maxHeight: '242px' }} src="/static/opens/atlant/security-others/security-other-2.jpg" alt="" />
                    </div>
                </Link>
                <Link href="/opens/atlant/security-others/security-other-3/">
                    <div className="card jcsb aic t3 mobile-full flex column h100">
                        <div className="flex column">
                            <h3 className="tac">Дверь звукоизоляционная АТ.Д.П(EI60).ДГ(S60)<br />.С(20).ЗИ</h3>
                            <ul className="list-none">
                                <li className="min-text">1 - с сигнализацией</li>
                                <li className="min-text">2 - с блокирующим устройством</li>
                                <li className="min-text">3 - с сигнализацией и блокирующим устройством</li>
                                <li className="min-text">4 - с системой контроля управления доступом</li>
                                <li className="min-text">5 - с электроприводом</li>
                                <li className="min-text">Без индекса - без дополнительных устройств</li>
                            </ul>
                        </div>
                        <img className="ha ofcontain" style={{ maxWidth: '262px' }} src="/static/opens/atlant/security-others/security-other-3.jpg" alt="" />
                    </div>
                </Link>
            </div>
        </MainLayout>
    );
};

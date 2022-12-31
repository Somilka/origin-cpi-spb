import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

import { ModalContext } from '../components/modules/ModalsManagerContext';

import Modal from '../components/Modal';

// import '../styles/header.css';

const navigation = [
	{ id: 1, title: 'Главная', path: '/' },
	{ id: 2, title: 'Окна и двери', path: '/opens' },
	{ id: 3, title: 'Стеклопакеты', path: '/windows' }
	// { id: 4, title: "Цены", path: "/prices" },
];

export default function MainLayout({ children, title, page }) {
	const { pathname } = useRouter();
	console.log(pathname);

	// Router.onRouteChangeComplete = () => {
	// console.log('routechangecomplete');
	// window.scroll({
	// 	top: 0,
	// 	left: 0,
	// });
	// };

	const [
		mobMenuShow,
		upMobMenuShow
	] = useState(0);

	function openMenu() {
		upMobMenuShow(1);
	}

	function closeMenu() {
		upMobMenuShow(0);
	}

	return (
		<ModalContext.Provider value={{}}>
			<Head>
				<link rel='apple-touch-icon' sizes='180x180' href='/static/ico/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/static/ico/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/static/ico/favicon-16x16.png' />
				<link rel='manifest' href='/static/ico/site.webmanifest' />
				<link rel='mask-icon' href='/static/ico/safari-pinned-tab.svg' color='#5bbad5' />
				<meta name='msapplication-TileColor' content='#2b5797' />
				<meta name='theme-color' content='#ffffff' />
				<title>{title != null ? title + ' | ЦПИ-СПб' : 'Дешёвые окна | ЦПИ-СПб'}</title>
			</Head>
			<div className='layout'>
				<Modal />
				<header className={page == 'main' ? 'content overpic' : 'content'}>
					<Link href='/'>
						<img src='/static/logo.png' alt='' className='img-logo' />
					</Link>
					<nav>
						{navigation.map(({ id, title, path }) => (
							<Link key={id} href={path}>
								<a
									className={
										pathname.indexOf(path) === 0 ? pathname.length > 1 ? id == 1 ? (
											'nav-item'
										) : (
											'nav-item active'
										) : id != 1 ? (
											'nav-item'
										) : (
											'nav-item active'
										) : (
											'nav-item'
										)
									}
								>
									{title}
								</a>
							</Link>
						))}
					</nav>
					<div className='contacts'>
						<div className="contact phone">+7 911 950 24 11</div>
						<div className='contact phone'>+7 921 090 42 50</div>
						<a className='contact mail'>
							{/* href='mailto:info.cpi-spb@yandex.ru'  */}
							info.cpi-spb@yandex.ru
						</a>
					</div>
					<div className='burger' onClick={() => openMenu()}>
						<img src='/static/burger/burger.svg' alt='' />
					</div>
					{/* <div className='btn btn-header'>Заказать расчёт</div> */}
				</header>
				<main>
					{mobMenuShow == 1 ? (
						<div className='mobileMenuBlock'>
							<div className='mobileMenu'>
								<div className='menuTop'>
									<div className='menuClose' onClick={() => closeMenu()}>
										Закрыть
									</div>
									<div className='menuNav'>
										{navigation.map(({ id, title, path }) => (
											<Link key={id} href={path}>
												<a
													className={
														pathname.indexOf(path) === 0 ? pathname.length > 1 ? id == 1 ? (
															'menuNavItem'
														) : (
															'menuNavItem active'
														) : id != 1 ? (
															'menuNavItem'
														) : (
															'menuNavItem active'
														) : (
															'menuNavItem'
														)
													}
												>
													{title}
												</a>
											</Link>
										))}
									</div>
								</div>
								<div className='menuBottom'>
									<div className='menuContacts'>
										<div className="contact phone">+7 911 950 24 11</div>
										<div className='menuContact phone'>+7 921 090 42 50</div>
										<a href='mailto:info.cpi-spb@yandex.ru' className='menuContact mail'>
											info.cpi-spb@yandex.ru
										</a>
									</div>
								</div>
							</div>
							<div className='black' onClick={() => closeMenu()} />
						</div>
					) : null}
					{children}
				</main>
			</div>
		</ModalContext.Provider>
	);
}

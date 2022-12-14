import { useState } from 'react';
import WinsMain from '../components/WinsMain';
import MainLayout from '../layouts/MainLayout';
import OpensCategories from '../components/OpensCategories';

import Link from 'next/dist/client/link';
import WinsPVH from '../components/WinsPVH';
import WinsAlum from '../components/WinsAlum';
import FFWinsDoors from '../components/FFWinsDoors';

export default function Opens() {
	const [
		winNav,
		setWinNav
	] = useState(0);

	// const OpensCategories = [
	// 	{
	// 		id: 0,
	// 		title: 'Общее',
	// 		link: '/opens/'
	// 	},
	// 	{
	// 		id: 1,
	// 		title: 'Окна ПВХ',
	// 		link: '/opens/pvh/'
	// 	},
	// 	{
	// 		id: 2,
	// 		title: 'Алюминиевые окна',
	// 		link: '/opens/alum/'
	// 	},
	// 	{
	// 		id: 3,
	// 		title: 'Деревянные окна',
	// 		link: '/opens/wooden'
	// 	},
	// 	{
	// 		id: 4,
	// 		title: 'Противопожарные двери и окна',
	// 		link: '/opens/fire-fighting'
	// 	}
	// ];

	return (
		<MainLayout>
			<div className='content'>
				<div className='win-nav'>
					<OpensCategories winNav={winNav} />
					{/* {OpensCategories.map(({id, title, link}, i) => (
						<Link key={id} href={link}>
							<div
								className={winNav == id ? 'win-nav-item selected' : 'win-nav-item'}
								onClick={() => {
									setWinNav(id);
								}}
							>
								{title}
							</div>
						</Link>
					))} */}
				</div>
			</div>
			<div className='content'>
				<div className='title'>Окна</div>
			</div>
			{/* <div className='block'> */}
			<div className='content'>
				<div className='f3 card static bigger-gap h100 mobile-full'>
					<Link href="/opens/pvh">
						<div className="flex column bigger-gap hoverable h100">
							<h3 className='w100 tac'>Пластиковые окна</h3>
							<img src='/static/opens/brusbox/brusbox_60-4-mini.png' alt='' />
						</div>
					</Link>
					<div className='flex column ais'>
						{/* <Link href='/opens/pvh/veka'>
								<div className='card static wa'>Veka</div>
							</Link> */}
						<Link href='/opens/pvh/rehau'>
							<div className='card static wa'>Rehau</div>
						</Link>
						<Link href='/opens/pvh/brusbox'>
							<div className='card static wa'>Brusbox</div>
						</Link>
					</div>
				</div>
				<div className='s3 card static bigger-gap h100 mobile-full'>
					<Link href="/opens/alum">
						<div className="flex column bigger-gap hoverable h100">
							<h3 className='w100 tac'>Алюминивые окна</h3>
							<img src='/static/mainWindow/alum.png' alt='' />
						</div>
					</Link>
					<div className='flex column ais'>
						<Link href='/opens/alum/light-septums'>
							<div className='card static wa'>Перегородки</div>
						</Link>
						<Link href='/opens/alum/facades'>
							<div className='card static wa'>Фасады</div>
						</Link>
						<Link href='/opens/alum/skylights'>
							<div className='card static wa'>Купола</div>
						</Link>
					</div>
				</div>
				<div className='t3 card static bigger-gap h100 mobile-full'>
					<h3 className='w100 tac'>Деревянные окна</h3>
					<img src='/static/mainWindow/wooden.png' alt='' />
					<div className='flex column ais'>
						{/* <Link href='/opens/wooden'> */}
						{/* <div className='card static wa'>Деревянные</div> */}
						{/* </Link> */}
					</div>
				</div>
			</div>
			{/* </div> */}
			<div className='content'>
				<h2 className='full tac'>Самые популярные профили</h2>
				{/* <div className='flex column jcsb aie h100 f3 open-ordered mob-left mobile-left'>
					<div className='flex column aie w100'>
						<Link href='/opens/pvh/veka/euroline'><h3 style={{ alignSelf: 'start' }} className="hoverable">Veka Euroline 58</h3></Link>
						<Link href='/opens/pvh/veka/euroline'><img src='/static/opens/veka_euroline_main.png' alt='' className="hoverable" /></Link>
					</div>
					<div className='flex column aie'>
						<div className='cost'>от 30 300 руб.</div>
						<Link href='/opens/pvh/veka/euroline'>
							<div className='btn'>Подробнее</div>
						</Link>
					</div>
				</div> */}
				<div className='flex column jcsb aie h100 hl mobile-full open-ordered '>
					{/* <div className='flex column aie'> */}
					<Link href='/opens/pvh/rehau/geneo'><h3 style={{ alignSelf: 'start' }} className="hoverable">Rehau GENEO</h3></Link>
					<Link href='/opens/pvh/rehau/geneo'><img src='/static/opens/rehau/rehau_geneo.png' alt='' className="hoverable" /></Link>
					{/* </div> */}
					<div className='flex column aie'>
						<div className='cost'>от 16 900 руб.</div>
						<Link href='/opens/pvh/rehau/geneo'>
							<div className='btn'>Подробнее</div>
						</Link>
					</div>
				</div>
				<div className='flex column jcsb aie h100 hr mob-right open-ordered mobile-right'>
					<div className='flex column aie w100'>
						<Link href='/opens/pvh/veka/euroline'><h3 style={{ alignSelf: 'start' }} className="hoverable" >Brusbox 60-4</h3></Link>
						<Link href='/opens/pvh/veka/euroline'><img src='/static/opens/brusbox/brusbox_60-4.png' alt='' className="hoverable" /></Link>
					</div>
					<div className='flex column aie'>
						<div className='cost'>от 77 777 руб.</div>
						<Link href='/opens/pvh/brusbox/60-4'>
							<div className='btn'>Подробнее</div>
						</Link>
					</div>
				</div>
			</div>
			<div className='content'>
				<h2 className='full tac'>Варианты остекления</h2>
				<img src='/static/opens/glazing_options.png' alt='' className='full' />
			</div>
			<div className='content'>
				<div className='hl card static bigger-gap h100'>
					<Link href="/opens/atlant/">
						<div className="flex column bigger-gap hoverable aic h100">
							<h3 className='w100 tac'>Специализированные двери «Атлант»</h3>
							<img src='/static/atlant_logo.png' className='w50 ha' alt='' />
						</div>
					</Link>
					<div className='flex column ais'>
						{/* <Link href='/opens/pvh/veka'>
								<div className='card static wa'>Veka</div>
							</Link> */}
						<Link href='/opens/atlant/security-doors/'>
							<div className='card static wa'>Двери защитные</div>
						</Link>
						<Link href='/opens/atlant/security-hermetic-hatches/'>
							<div className='card static wa'>Люки защитно-герметические</div>
						</Link>
						<Link href='/opens/atlant/hermetic-gates'>
							<div className='card static wa'>Ворота герметические</div>
						</Link>
					</div>
				</div>
				<div className='hr card static bigger-gap h100'>
					<Link href="/opens/fire-fighting/">
						<div className="flex column bigger-gap hoverable h100">
							<h3 className='w100 tac'>Противопожарные двери и окна</h3>
							<img src='/static/opens/ff/ff2.jpg' className='w100 ha' style={{ borderRadius: '34px'}} alt='' />
						</div>
					</Link>
					<div className='flex column ais'>
						<Link href='/opens/fire-fighting/double-field'>
							<div className='card static wa'>Противопожарные двери двупольные</div>
						</Link>
						<Link href='/opens/fire-fighting/lukes'>
							<div className='card static wa'>Люки противопожарные</div>
						</Link>
						<Link href='/opens/fire-fighting/armored'>
							<div className='card static wa'>Бронированные двери</div>
						</Link>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}

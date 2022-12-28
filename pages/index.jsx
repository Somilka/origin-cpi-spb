import MainLayout from '../layouts/MainLayout';
import Slider from '../components/Slider/Slider';
import Link from 'next/link';
// import img from '../public/dev_logo.png';
import styles from '../styles/main.module.scss';

export default function Index() {
	return (
		<MainLayout title='Главная' page='main'>
			<div className='block main'>
				<div className='content'>
					<div className={styles.welcomeText}>
						<h2 className={styles.welcomeTitle}>
							Производство пластиковых, алюминиевых и деревянных окон в Санкт-Петербурге
						</h2>
						<div className={styles.welcomePar}>“Центр Промышленных Инноваций - СПб” приветствует Вас</div>
					</div>
					<div className={styles.welcomeWin}>
						<Link href='/opens/pvh'>
							<div className={styles.welcomeWinCard}>
								<img className={styles.welcomeWinCardImg} src='/static/mainWindow/pvh.png' alt='dev logo' />
								<div className={styles.welcomeWinCardText}>Пластиковые окна</div>
							</div>
						</Link>
						<Link href='/opens/alum'>
							<div className={styles.welcomeWinCard}>
								<img className={styles.welcomeWinCardImg} src='/static/mainWindow/alum.png' alt='dev logo' />
								<div className={styles.welcomeWinCardText}>Алюминиевые окна</div>
							</div>
						</Link>
						{/* <Link href='/opens/wooden'> */}
							<div className={styles.welcomeWinCard}>
								<img className={styles.welcomeWinCardImg} src='/static//mainWindow/wooden.png' alt='dev logo' />
								<div className={styles.welcomeWinCardText}>Деревянные окна</div>
							</div>
						{/* </Link> */}
						<Link href='/opens/fire-fighting'>
							<div className={styles.welcomeWinCard}>
								<img className={styles.welcomeWinCardImg} src='/static/opens/FF/FF1.jpg' alt='dev logo' />
								<div className={styles.welcomeWinCardText}>Противопожарные окна и двери</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
			{/* <div className="content"> */}
			<Slider />
			{/* </div> */}
			<div className='content'>
				<Link href='/sills'>
					<div className='category big'>
						<img src='/static/categories/sills.png' alt='Подоконники' className='category-img' />
						<div className='category-name'>Подоконники</div>
					</div>
				</Link>
				<Link href='/windows'>
					<div className='category big'>
						<img src='/static/wooden-pvh.png' alt='Стеклопакеты' className='category-img' />
						<div className='category-name'>Стеклопакеты</div>
					</div>
				</Link>
				<Link href='/wos'>
					<div className='category big'>
						<img src='/static/categories/wos.jpg' alt='Системы открывания окон' className='category-img' />
						<div className='category-name'>Системы открывания окон</div>
					</div>
				</Link>
				<Link href='/drainages'>
					<div className='category min'>
						<img src='/static/categories/drainages.jpg' alt='Водоотливы' className='category-img' />
						<div className='category-name'>Водоотливы</div>
					</div>
				</Link>
				<Link href='/slopes'>
					<div className='category min'>
						<img src='/static/categories/slopes.jpg' alt='Откосы' className='category-img' />
						<div className='category-name'>Откосы</div>
					</div>
				</Link>
				<Link href='/mosqnets'>
					<div className='category min'>
						<img src='/static/categories/mosqnets.png' alt='Москитные сетки' className='category-img' />
						<div className='category-name'>Москитные сетки</div>
					</div>
				</Link>
				<Link href='/fittings'>
					<div className='category min'>
						<img src='/static/categories/fittings.jpg' alt='Фурнитура и ручки' className='category-img' />
						<div className='category-name'>Фурнитура/ручки</div>
					</div>
				</Link>
			</div>
			<div className='content'>
				<div className='title'>Наши партнёры</div>
				<div className='partner-imgs'>
					<img src='/static/partners/partner1.png' alt='РОСАТОМ' className='partner' />
					<img src='/static/partners/partner2.png' alt='КОНТУР' className='partner' />
					<img src='/static/partners/partner3.png' alt='АРГОС' className='partner' />
					<img src='/static/partners/partner4.png' alt='B2B Center' className='partner' />
					<img src='/static/partners/partner5.png' alt='Фабрикант' className='partner' />
					<img src='/static/partners/partner6.svg' alt='ТИТАН2' className='partner' />
					<img src='/static/partners/partner7.png' alt='' className='partner' />
				</div>
			</div>
		</MainLayout>
	);
}

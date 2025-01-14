<script>
	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';
	import { onMount } from 'svelte';

	import { browser } from '$app/env';

	let Carousel; // for saving Carousel component class
	let carousel; // for calling methods of the carousel instance
	onMount(async () => {
		const module = await import('svelte-carousel');
		Carousel = module.default;
	});

	let showPopup = browser && localStorage.showPopup === undefined ? true : false;

	let hidePopup = () => {
		showPopup = false;
		localStorage.showPopup = false;
	};
</script>

<svelte:head>
	<title>Westwood Robotics</title>
	<meta name="description" content="Team 1757's page detailing their history and future" />
	<meta name="keywords" content="FRC, FIRST, Robotics" />
	<meta name="author" content="Westwood Robotics" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta property="og:title" content="Westwood Robotics team 1757" />
	<meta property="og:description" content="First Robotics Competition team 1757 from Westwood MA" />
	<meta property="og:image" content="https://whsrobotics.org/img/team_bg.jpg" />
</svelte:head>

<Navbar />
<div
	class="max-w-full bg-[#115724] h-screen min-h-5 align-center bg-[url('/img/banner.webp')] bg-center bg-cover bg-blend-multiply text-white text-center flex items-center justify-center"
>
	<span>
		<h1 class="text-7xl">Westwood Robotics</h1>
		<h4><i>FIRST</i> Robotics Competition - Team 1757: Wolverines</h4>
	</span>
</div>
<div class="bg-zinc-800">
	<div class="container mx-auto text-center p-4 max-w-prose text-white">
		<div class="bg-green-600 p-3 mx-auto rounded-lg max-w-md text-black my-10">
			Westwood Robotics Inc. is a 501(c)(3) non-profit organization. Want to contribute? Donate to
			our <b
				><a
					href="https://www.paypal.com/fundraiser/charity/2843232"
					class="text-emerald-400 hover:underline">Paypal</a
				></b
			>
		</div>
		<div class="banner-center">
			<div class="banner">
				<img src="https://thebluealliance.com/images/first_icon.svg" />
				<div class="award-name">
					<span>Winner</span>
				</div>
				<div class="award-event">
					<span>2023 WPI District</span>
				</div>
			</div>
			<div class="banner">
				<img src="https://thebluealliance.com/images/first_icon.svg" />
				<div class="award-name">
					<span>Winner</span>
				</div>
				<div class="award-event-long">
					<span>2023 NEDC - WILSON District Championship Division</span>
				</div>
			</div>
			<div class="banner">
				<img src="https://thebluealliance.com/images/first_icon.svg" />
				<div class="award-name">
					<span>Winner</span>
				</div>
				<div class="award-event-long">
					<span>2023 New England District Championship</span>
				</div>
			</div>
			<div class="banner">
				<img src="https://thebluealliance.com/images/first_icon.svg" />
				<div class="award-name">
					<span>Winner</span>
				</div>
				<div class="award-event-long">
					<span>2024 WPI FIRST Impact Award</span>
				</div>
			</div>
		</div>
		<br />
		<h3 class="text-4xl">OUR MISSION</h3>
		<br />
		<p class="text-m">
			Founded in 2006, we are a high-school robotics team from Westwood, MA with a mission to
			inspire young people to become leaders in science, technology, art, engineering, and
			mathematics by engaging them in team-based programs that build important technical and life
			skills such as leadership, innovation, communication, and self-confidence.
		</p>
		<br />
		<iframe
			class="aspect-video w-full"
			src="https://www.youtube.com/embed/HeokAZa2hfo"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
		<br />
		<h1 class="text-3xl m-3">CHECK US OUT IN THE NEWS!</h1>
		<div class="p-8 bg-emerald-900 m-4 shadow-black drop-shadow-md rounded-xl">
			<div>
				<a
					class="text-sky-400 hover:text-blue-600"
					href="https://westwoodminute.town.news/g/westwood-ma/n/153573/westwood-robotics-team-shines-award-studded-competition-season"
					>Westwood Robotics Team Celebrates Three Competition Wins, Heads to World Championships |
					Westwood Minute</a
				>
				<hr class="p-2 m-2" />
			</div>
			<img
				src="https://westwoodminute.town.news/sites/default/files/styles/extra_large/public/8418/2023-04/screenshot_2023-04-11_at_10.29.41_pm.png.jpg?itok=hIpQWfCa"
				width="1200"
				height="900"
				alt="Westwood Robotics Team Celebrates Three Competition Wins, Heads to World Championships"
			/>
		</div>
		<div class="p-8 bg-emerald-900 m-4 shadow-black drop-shadow-md rounded-xl">
			<div>
				<a
					class="text-sky-400 hover:text-blue-600"
					href="https://whdh.com/news/westwood-hs-robotics-team-goes-global-competes-internationally/"
					>Westwood HS robotics team goes global, competes internationally | 7 News WHDH</a
				>

				<hr class="p-2 m-2" />
			</div>
			<a
				href="https://whdh.com/news/westwood-hs-robotics-team-goes-global-competes-internationally/"
			>
				<img
					src="https://cf-images.us-east-1.prod.boltdns.net/v1/static/4744899807001/49863e3d-3174-4bd4-b54b-9076317d179e/d96b0e3b-945a-45fe-b37a-b0667a29bd68/1280x720/match/image.jpg"
					width="1280"
					height="730"
					alt="Team 1757's 2022 robot in action"
				/>
			</a>
		</div>

		<hr class="p-8" />
		<a class="text-3xl m-3 text-sky-500 hover:underline mb-9" href="/robots"
			>CHECK OUT OUR ROBOTS!</a
		>
		<div class="bg-slate-800 rounded-xl drop-shadow-md mt-9">
			<svelte:component this={Carousel} bind:this={carousel} autoplay>
				<div>
					<img src="/img/robots/2024crescendo.png" alt="Crescendo"/>
					<h1>2024 Crescendo - "PROTEUS"</h1>
				</div>
				<div>
					<img src="/img/robots/2023chargedup.png" alt="Charged Up" />
					<h1>2023 Charged Up - "LUXO"</h1>
				</div>
				<div>
					<img src="/img/robots/2022rapidreact.png" alt="Rapid React" />
					<h1>2022 Rapid React - "SKADI"</h1>
				</div>
				<div>
					<img src="/img/robots/2022tshirtcannon.png" alt="2022 T Shirt Cannon" />
					<h1>2022 T Shirt Cannon</h1>
				</div>
				<div>
					<img src="/img/robots/2020infiniterecharge.png" alt="2020 robot" class="mx-auto" />
					<h1>2020 Infinite Recharge</h1>
				</div>
				<div>
					<img src="/img/robots/2019deepspace_compressed.png" alt="2019 robot" />
					<h1>2019 Deep Space - "RAMPOTHY"</h1>
				</div>
				<div>
					<img src="/img/robots/2018firstpowerup_compressed.png" alt="2018 robot" />
					<h1>2018 Power Up</h1>
				</div>
				<div>
					<img src="/img/robots/2017steamworks_compressed.png" alt="2017 robot" />
					<h1>2017 Steamworks</h1>
				</div>
			</svelte:component>
		</div>
		<hr class="p-8" />
		<div class="bg-white text-black p-6 rounded-xl">
			<div class="flex items-center">
				<img src="/img/sponsors/whs.png" class="flex-none basis-1/3 max-w-[25%]" alt="WHS logo" />
				<p class="basis-2/3 flex-none">
					Westwood High School is a public high school located in the Greater Boston area. Westwood
					High School aims to encourage and develop students' education across all fields. <a
						class="text-sky-500 hover:underline"
						href="http://www.westwood.k12.ma.us/westwood-high-school">Learn More</a
					>
				</p>
			</div>
			<br />
			<div class="flex items-center">
				<p class="basis-2/3 flex-none">
					FIRST Robotics Competition (FRC) is an international high-school competition. FIRST is a
					foundation whose mission is to inspire young people to become science and technology
					leaders by engaging them in exciting mentor-based programs that build science,
					engineering, and technology skills. <a
						class="text-sky-500 hover:underline"
						href="https://www.firstinspires.org/robotics/frc">Learn More</a
					>
				</p>
				<img src="/img/frc_logo.jpg" alt="FRC logo" class="flex-none basis-1/3 max-w-[25%]" />
			</div>
			<br />
			<div class="flex items-center">
				<img
					src="/img/westwoodroboticsinc.png"
					class="flex-none basis-1/3 max-w-[25%]"
					alt="WW Robotics Inc Logo"
				/>
				<p class="basis-2/3 flex-none">
					Westwood Robotics, Inc. is a 501(c)(3) non-profit organization designed to support
					Westwood Robotics and promote STEM education throughout the community.
				</p>
			</div>
		</div>
		<hr class="p-8" />
		<div class="p-9 bg-gray-100 rounded-xl drop-shadow-md text-black">
			<h1 class="text-3xl mb-9">SPONSORS</h1>
			<div class="p-8 bg-yellow-300 rounded-xl drop-shadow-md m-2">
				<p class="mb-4"><b>Gold Tier</b></p>
				<div class="flex justify-around items-center flex-wrap gap-2">
					<a
						class="w-48 aspect-square bg-white flex items-center rounded-xl"
						href="http://www.westwood.k12.ma.us/westwood-high-school/"
						target="_blank"
					>
						<img src="/img/sponsors/whs.png" />
					</a>
					<a
						class="w-48 aspect-square bg-white flex items-center rounded-xl"
						href="https://www.cardathea.com/"
						target="_blank"
					>
						<img src="/img/sponsors/cardathea.png" />
					</a>
				</div>
			</div>
			<div class="p-8 bg-stone-400 rounded-xl drop-shadow-md m-2">
				<p class="mb-4"><b>Silver Tier</b></p>
				<div class="flex justify-around items-center flex-wrap gap-2">
					<a class="w-32" href="https://www.medtronic.com/us-en/index.html" target="_blank">
						<img src="/img/sponsors/medtronic.png" />
					</a>
					<a class="w-32" href="http://actfastenersinc.com/" target="_blank">
						<img src="/img/sponsors/actfasteners.png" />
					</a>
					<a class="w-32" href="https://www.intuitive-foundation.org/" target="_blank">
						<img src="/img/sponsors/intuitivefoundation.webp" />
					</a>
					<a class="w-32" href="https://www.iracars.com/" target="_blank">
						<img src="/img/sponsors/iramotorgroup.png" />
					</a>
					<a class="w-32" href="https://techliere.com/" target="_blank">
						<img src="/img/sponsors/techliere.webp" />
					</a>
					<h3 class="w-32">Gelsomini Family</h3>
					<h3 class="w-32">Gopal Family</h3>
				</div>
			</div>
			<div class="p-8 bg-yellow-800 rounded-xl drop-shadow-md m-2">
				<p class="mb-4"><b>Bronze Tier</b></p>
				<div class="flex justify-around items-center flex-wrap gap-2">
					<a class="w-24" href="https://www.needhambank.com/" target="_blank">
						<img src="/img/sponsors/needhambank.svg" />
					</a>
					<a class="w-24" href="https://www.se.com/us/en/" target="_blank">
						<img src="/img/sponsors/schneiderelectric.png" />
					</a>
					<a class="w-24" href="https://www.dedhamsavings.com/" target="_blank">
						<img src="/img/sponsors/dedhamsavings.svg" />
					</a>
					<a class="w-24" href="https://printmasteronline.com/" target="_blank">
						<img src="/img/sponsors/PrintMaster.png" />
					</a>
					<a class="w-24" href="https://www.poiriersales.com/" target="_blank">
						<img src="/img/sponsors/poirier.png" />
					</a>
					<a class="w-24" href="https://www.comellasrestaurants.com/" target="_blank">
						<img src="/img/sponsors/comellas.png" />
					</a>
					<h3 class="w-24">Peng Family</h3>
					<h3 class="w-24">McWeeney Family</h3>
				</div>
			</div>
		</div>
	</div>
	{#if showPopup}
		<div class="fixed bottom-5 rounded-xl bg-green-600 p-5 drop-shadow-md mx-5">
			Like the new look? We updated our website!
			<br />
			<b
				><button type="button" class="text-red-600 text-sm" on:click={hidePopup}
					>Click here to dismiss</button
				></b
			>
		</div>
	{/if}
	<Footer />
</div>

<style>
	.banner {
		-webkit-text-size-adjust: 100%;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		font-family: Roboto, sans-serif;
		font-size: 14px;
		box-sizing: border-box;
		background: #0f4bcb;
		color: #fff;
		display: inline-block;
		height: 170px;
		line-height: 1.2;
		margin: 0 0 40px;
		padding: 8px;
		position: relative;
		vertical-align: top;
		white-space: normal;
		width: 140px;
		filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1));
		text-align: center;
	}
	.banner:after {
		box-sizing: border-box;
		-webkit-filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1));
		filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1));
		border-bottom: 70px solid #0f4bcb;
		border-color: #0f4bcb #0f4bcb transparent;
		border-style: solid;
		border-width: 5px 70px 20px;
		content: '';
		display: block;
		left: 0;
		position: absolute;
		top: 100%;
	}
	.banner img {
		-webkit-text-size-adjust: 100%;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		font-family: Roboto, sans-serif;
		font-size: 14px;
		color: #fff;
		line-height: 1.2;
		text-align: center;
		white-space: normal;
		box-sizing: border-box;
		border: 0;
		vertical-align: middle;
		margin-bottom: 10px;
		margin-top: 10px;
		max-height: 45px;
		width: 75px;
		display: inline;
	}
	.banner .award-name,
	.banner .award-name-long {
		-webkit-text-size-adjust: 100%;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		font-family: Roboto, sans-serif;
		font-size: 14px;
		color: #fff;
		line-height: 1.2;
		text-align: center;
		white-space: normal;
		box-sizing: border-box;
		display: table;
		font-weight: bolder;
		height: 35px;
		margin: 3px 0;
		width: 100%;
	}
	.banner .award-event,
	.banner .award-event-long {
		-webkit-text-size-adjust: 100%;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		font-family: Roboto, sans-serif;
		color: #fff;
		text-align: center;
		white-space: normal;
		box-sizing: border-box;
		display: table;
		height: 50px;
		text-transform: uppercase;
		width: 100%;
		font-size: 85%;
		line-height: 130%;
	}
	.banner .award-event span,
	.banner .award-event-long span {
		-webkit-text-size-adjust: 100%;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		font-family: Roboto, sans-serif;
		color: #fff;
		text-align: center;
		white-space: normal;
		text-transform: uppercase;
		font-size: 85%;
		line-height: 130%;
		box-sizing: border-box;
		display: table-cell;
		max-width: 124px;
		overflow: hidden;
		text-overflow: ellipsis;
		vertical-align: middle;
	}
	.banner .award-name span,
	.banner .award-name-long span {
		display: table-cell;
		font-style: italic;
		text-transform: uppercase;
		vertical-align: middle;
	}
	.banner-center {
		-webkit-text-size-adjust: 100%;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		color: #333;
		font-family: Roboto, sans-serif;
		font-size: 14px;
		line-height: 1.42857143;
		box-sizing: border-box;
		text-align: center;
	}
	h3 {
		font-weight: 700;
	}
</style>

import Link from "next/link";

export async function AboutInfos() {
	return (
		<div className="min-h-screen w-full items-center justify-center overflow-hidden text-white text-center">
			<div className='flex flex-col justify-start'>
				<div className="max-w-4xl mt-8">
					<p className="mt-4 text-lg text-muted-foreground">
						Welcome to our company! We are dedicated to providing the best service possible. Our team is composed of experienced professionals who are passionate about what they do. We believe in innovation, integrity, and excellence. Thank you for choosing us!
					</p>
				</div>
				<div className="mt-8">
					<Link target='_blank' href={"#tally-open=mKo7kz&tally-hide-title=1&tally-emoji-text=👽&tally-emoji-animation=bounce"} className="px-4 py-2 transition-all ease-in duration-200 cursor-pointer backdrop-blur-sm border bg-emerald-300/10 hover:bg-emerald-300/30 border-emerald-500/20 text-white text-center rounded-full relative">
						<span>{"Let's Have a Chat →"}</span>
						<div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
					</Link>
				</div>
			</div>
		</div>
	);
}

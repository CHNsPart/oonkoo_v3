"use client";

import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Meteors } from "@/components/ui/meteors";
import { ArrowRight, ChevronRight } from "lucide-react";
import React from "react";
import ContactHeader from "../../components/ContactHeader";
import ShimmerButton from "../../components/magicui/shimmer-button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

const page = () => {
	return (
		<div className="min-h-screen w-full bg-[#1f1c1c] flex flex-col items-center overflow-hidden rounded-md md:p-10 p-4 relative">
			<Navbar />
			<ContactHeader />

			{/* form */}
			<div className="py-10 pb-48">
				<div className="">
					<div className=" w-full relative max-w-md">
						<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-primary to-green-900 transform scale-[0.80] rounded-full blur-3xl" />
						<div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start bg-opacity-85">
							<h1 className="font-bold text-xl text-white mb-4 relative z-50">
								Just a click away to get the personalized solution
							</h1>

							<p className="font-normal text-base text-slate-500 mb-4 relative z-50">
								I don&apos;t know what to write so I&apos;ll just paste
								something cool here. One more sentence because lorem ipsum is
								just unacceptable. Won&apos;t ChatGPT the shit out of this.
							</p>

							{/* inputs */}
							<form className="my-8 w-full" onSubmit={() => {}}>
								<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
									<div className="flex-1">
										<Label htmlFor="firstname">First name</Label>
										<Input id="firstname" placeholder="Tyler" type="text" />
									</div>
									<div className="flex-1">
										<Label htmlFor="lastname">Last name</Label>
										<Input id="lastname" placeholder="Durden" type="text" />
									</div>
								</div>
								<div className="mb-4">
									<Label htmlFor="email">Email Address</Label>
									<Input
										id="email"
										placeholder="projectmayhem@fc.com"
										type="email"
									/>
								</div>
								<div className="mb-4">
									<Label htmlFor="message">Message</Label>
									<Input
										id="message"
										placeholder="Enter your message here"
										type="text"
										isTextarea
									/>
								</div>

								<div className="flex w-full justify-center items-center">
									<ShimmerButton>
										Connect{" "}
										<span>
											{" "}
											<ChevronRight size={20} />
										</span>
									</ShimmerButton>
								</div>
							</form>

							{/* Meaty part - Meteor effect */}
							<Meteors number={20} />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default page;

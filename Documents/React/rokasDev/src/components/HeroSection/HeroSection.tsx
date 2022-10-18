import React from 'react';
import Image from 'next/image';
import Button from '../Button';
import MaxWidthWrapper from '../MaxWidthWrapper';
import pattern4 from '../../../public/images/brand_elements/pattern_4.svg';

function HeroSection() {
    return (
        <MaxWidthWrapper>
            <section className="flex flex-col md:space-x-6 md:flex-row items-center">
                {/* Taglines */}
                <div className="flex-1 mb-5">
                    <p className="text-xs text-secondary font-mono">
                        Building from 0 | Code | Entrepreneurship
                    </p>

                    <h1 className="text-3xl leading-relaxed">
                        I am are not Just a Developer. I am more than that 🚀
                    </h1>
                    <p className="text-xl text-gray-300 my-4 leading-relaxed">
                        Your journey to becoming a full-stack technical lead starts today.
                        Learn faster by building the apps you ❤️
                    </p>

                    {/* button */}
                    <Button
                        href="https://www.youtube.com/c/RokasRudzianskas"
                        text="Subscribe"
                        className="w-32 my-5"
                    />
                </div>

                {/* Video */}
                <div className="flex-1 relative justify-center items-center pr-9 mb-10 w-full">
                    <Image
                        src="https://i.ytimg.com/vi/gVt-84I0XME/maxresdefault.jpg"
                        height={145}
                        width={250}
                        alt="profile image"
                        layout="responsive"
                        // placeholder="blur"
                    />
                    <div className="absolute bottom-0 right-0 w-14 transform translate-y-9 md:w-24 md:translate-y-16 md:translate-x-6">
                        <Image src={pattern4} alt="brand element" layout="responsive" />
                    </div>
                </div>
            </section>
        </MaxWidthWrapper>
    );
}

export default HeroSection;

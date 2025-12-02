import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ExperienceSection() {
    return (
        <section
            className="relative w-full bg-[#FAF9F7] py-24 md:py-36 overflow-hidden"
            aria-labelledby="experience-heading"
        >
            <div className="max-w-6xl mx-auto px-6">
                {/* Título elegante mas legível */}
                <h2
                    id="experience-heading"
                    className="text-center text-4xl md:text-6xl font-light tracking-[-0.02em] text-[#1F1F1F]"
                >
                    Two experiences,
                    <br />
                    <span className="text-[#5A3E36]">one intention.</span>
                </h2>

                {/* Subtítulo explicativo */}
                <p className="mt-8 text-center text-lg text-[#5A3E36]/80 font-light max-w-2xl mx-auto leading-relaxed">
                    Whether you seek therapeutic care or artistic expression,
                    each service begins with listening.
                </p>

                {/* Cards minimalistas */}
                <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                    {/* Hair Therapy Card */}
                    <Link
                        href="/scalp-therapy"
                        className="group block relative overflow-hidden rounded-2xl 
                       bg-white border border-[#EFE9E4] 
                       transition-all duration-500 hover:border-[#E5DCD2]
                       focus:outline-none focus:ring-2 focus:ring-[#C2A878]/30 focus:ring-offset-2"
                        aria-label="Explore Scalp Therapy services"
                    >
                        <div className="p-12 md:p-16">
                            {/* Ícone sutil ou número */}
                            <div className="mb-8 text-[#5A3E36]/40 text-sm tracking-widest uppercase">
                                Care First
                            </div>

                            <h3 className="text-3xl md:text-4xl font-light tracking-tight text-[#1F1F1F]">
                                Hair-therapy
                            </h3>

                            <p className="mt-6 text-lg text-[#5A3E36] font-light leading-relaxed">
                                Restorative care that begins with understanding.
                                Science‑led treatments for hair health and scalp balance.
                            </p>

                            <div
                                className="mt-10 flex items-center gap-3 text-[#5A3E36] group-hover:text-[#C2A878] 
                           transition-colors duration-500"
                                aria-hidden="true"
                            >
                                <span className="text-sm font-normal">Discover the approach</span>
                                <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1.5 transition-transform duration-500" />
                            </div>
                        </div>
                    </Link>

                    {/* Braids Card */}
                    <Link
                        href="/braids"
                        className="group block relative overflow-hidden rounded-2xl 
                       bg-white border border-[#EFE9E4] 
                       transition-all duration-500 hover:border-[#E5DCD2]
                       focus:outline-none focus:ring-2 focus:ring-[#C2A878]/30 focus:ring-offset-2"
                        aria-label="Explore Braiding services"
                    >
                        <div className="p-12 md:p-16">
                            {/* Ícone sutil ou número */}
                            <div className="mb-8 text-[#5A3E36]/40 text-sm tracking-widest uppercase">
                                Artistry Next
                            </div>

                            <h3 className="text-3xl md:text-4xl font-light tracking-tight text-[#1F1F1F]">
                                Braids
                            </h3>

                            <p className="mt-6 text-lg text-[#5A3E36] font-light leading-relaxed">
                                Hand‑crafted with time and intention.
                                Each style respects your hair's health and your personal expression.
                            </p>

                            <div
                                className="mt-10 flex items-center gap-3 text-[#5A3E36] group-hover:text-[#C2A878] 
                           transition-colors duration-500"
                                aria-hidden="true"
                            >
                                <span className="text-sm font-normal">Explore the styles</span>
                                <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1.5 transition-transform duration-500" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
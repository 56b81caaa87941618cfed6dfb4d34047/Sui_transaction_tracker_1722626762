/* Summary: Contains a section with:
1. Accordion title: An h2 element that displays the title of the FAQ section, styled for font size, weight, and margin.
2. Accordion container: A div element that holds multiple accordion items, styled with vertical spacing. Each item has a visible question. When the + icon on the right is clicked, it expands to show the answer for that question.
*/

Vue.component("quoty_faq_accordion_component_1722626764", {
    template: `
    <section class="py-8 bg-white pl-4">
        <h2 class="text-lg font-semibold mb-5">Frequently Asked Questions about Sui Transaction Analytics</h2>
        <!-- Accordion -->
        <div class="space-y-3">
            <!-- Accordion item -->
            <div v-for="(term, index) in terms" :key="index" class="text-sm rounded-lg" :class="[{ 'expanded': term.expanded },accordionGradientStyle]">
                <h3>
                    <button type="button" class="flex items-center justify-between w-full text-left font-medium px-5 py-3" @click="toggle(index)" :aria-expanded="term.expanded" :aria-controls="'terms-text-' + index">
                    <button type="button" class="flex items-center justify-between w-full text-left font-medium px-5 py-3" @click="toggle(index)" :aria-expanded="term.expanded" :aria-controls="'terms-text-' + index">
                        <span>{{ term.title }}</span>
                        <svg class="shrink-0 ml-8" width="12" height="12" xmlns="http://www.w3.org/2000/svg" :class="svgFillStyle">
                            <rect y="5" width="12" height="2" rx="1" class="transform origin-center transition duration-200 ease-out" :class="{ '!rotate-180': term.expanded }" />
                            <rect y="5" width="12" height="2" rx="1" class="transform origin-center rotate-90 transition duration-200 ease-out" :class="{ '!rotate-180': term.expanded }" />
                        </svg>
                    </button>
                </h3>
                <div :id="'terms-text-' + index" role="region" :aria-labelledby="'terms-title-' + index" class="grid overflow-hidden transition-all duration-300 ease-in-out" :class="[{ 'grid-rows-[1fr] opacity-100': term.expanded, 'grid-rows-[0fr] opacity-0': !term.expanded }, termsTextStyle]">
                    <div class="overflow-hidden" :id="'terms-text-' + index + '-content'">
                        <p class="px-5 pb-3" :id="'terms-text-' + index + '-description'">
                            {{ term.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            accordionGradientStyle: "odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900",
            svgFillStyle: "fill-slate-400 dark:fill-slate-500",
            termsTextStyle: "text-slate-500 dark:text-slate-400",
            terms: [
                { title: "What is Sui and why do I need transaction analytics?", description: "Sui is a high-performance blockchain platform. Our app provides essential analytics to help you understand Sui transactions, optimize your strategies, and stay ahead in the fast-paced world of blockchain.", expanded: false },
                { title: "How does your app gather Sui transaction data?", description: "Our app utilizes advanced APIs and real-time data processing to collect and analyze Sui blockchain transactions. We ensure accuracy and up-to-the-minute insights for all users.", expanded: false },
                { title: "What types of analytics does your app offer?", description: "Our app offers a wide range of analytics including transaction volume, gas fees, popular smart contracts, wallet activity, and trending tokens. We also provide custom analytics tailored to your specific needs.", expanded: false },
                { title: "How can these analytics benefit my blockchain projects?", description: "Our Sui transaction analytics can help you identify market trends, optimize gas costs, discover popular dApps, and make data-driven decisions for your blockchain projects. Whether you're a developer, investor, or researcher, our insights give you a competitive edge.", expanded: false },
            ],
        };
    },
    methods: {
        toggle(index) {
            this.terms[index].expanded = !this.terms[index].expanded;
        },
    },
});

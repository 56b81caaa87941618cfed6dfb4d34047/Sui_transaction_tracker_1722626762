/* Summary: Contains a section with three cards with black background and white text.
  The three cards are side by side and each contains a detail name in bold above a detail value.
*/
Vue.component("page_details_cards_component_1722626764", {
    template: `
    <section id="page-details-cards-component" class="py-8 bg-white">
        <h2 id="details-title" class="text-lg font-semibold mb-5 pl-4">Details</h2>
        <ul id="details-list" class="grid gap-4 min-[480px]:grid-cols-3 text-sm">
            <li id="project-length" class="px-5 py-4 rounded-lg" :class="detailsListStyle">
                <div class="font-medium" :class="detailsComponentTextStyle">Real-time Insights</div>
                <div :class="detailsComponentTextSecondaryStyle">Get instant updates on Sui blockchain transactions as they happen, enabling you to stay ahead of market trends.</div>
            </li>
            <li id="start-date" class="px-5 py-4 rounded-lg" :class="detailsListStyle">
                <div class="font-medium" id="start-date-des-1" :class="detailsComponentTextStyle">Custom Analytics</div>
                <time :class="detailsComponentTextSecondaryStyle" id="start-time-des-1">Tailor your analytics dashboard to focus on the metrics that matter most to your Sui projects and investments.</time>
            </li>
            <li id="end-date" class="px-5 py-4 rounded-lg" :class="detailsListStyle">
                <div class="font-medium" id="end-date-des-1" :class="detailsComponentTextStyle">User-Friendly Interface</div>
                <time :class="detailsComponentTextSecondaryStyle" id="end-time-des-1">Navigate complex blockchain data with ease through our intuitive and responsive design, making analytics accessible to all.</time>
            </li>
        </ul>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
            detailsListStyle: "bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900",
            detailsComponentTextStyle: "text-slate-200",
            detailsComponentTextSecondaryStyle: "text-slate-400"
        };
    },
});


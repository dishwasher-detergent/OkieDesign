module.exports = {".badge":{"@apply inline-flex \r\n    flex-nowrap\r\n    items-center\r\n    gap-2\r\n    px-3 \r\n    py-1 \r\n    rounded-full \r\n    bg-primary-100 \r\n    text-primary-900 \r\n    font-semibold":true},".badge.success":{"@apply bg-success-100 text-success-900":true},".badge.warning":{"@apply bg-warning-100 text-warning-900":true},".badge.emergency":{"@apply bg-emergency-100 text-emergency-900":true},".badge.xs":{"@apply text-xs":true},".badge.sm":{"@apply text-sm":true},".badge.lg":{"@apply text-lg":true},".badge.xl":{"@apply text-xl":true},".badge.xxl":{"@apply text-2xl":true},".breadcrumb":{"@apply flex flex-row font-semibold":true},".breadcrumb > :not(:last-child):after":{"content":"\"/\"","@apply px-1":true},".breadcrumb.arrow > :not(:last-child):after":{"content":"\">\"","@apply px-2":true},".breadcrumb.extra_small":{"@apply text-xs":true},".breadcrumb.extra_small > :not(:last-child):after":{"@apply px-1":true},".breadcrumb.small":{"@apply text-sm":true},".breadcrumb.small > :not(:last-child):after":{"@apply px-1":true},".breadcrumb.large":{"@apply text-lg":true},".breadcrumb.large > :not(:last-child):after":{"@apply px-1.5":true},".breadcrumb.extra_large":{"@apply text-xl":true},".breadcrumb.extra_large > :not(:last-child):after":{"@apply px-1.5":true},".button":{"@apply px-4\r\n    h-9\r\n    inline-flex\r\n    flex-row\r\n    gap-2\r\n    items-center\r\n    justify-center\r\n    bg-primary-600\r\n    text-white\r\n    font-semibold\r\n    border \r\n    border-primary-600\r\n    rounded-md\r\n    transition-all\r\n    ease-in-out":true},".button:hover,\n.button:focus":{"@apply bg-primary-500\r\n    border-primary-500\r\n    ring-2\r\n    ring-primary-200":true},".button:focus":{"@apply outline-2 outline-primary-200":true},".button:active":{"@apply ring-4\r\n    ring-primary-200":true},".button.full":{"@apply w-full block":true},".button.round":{"@apply rounded-full":true},".button.outlined":{"@apply bg-transparent text-primary-600":true},".button.ghost":{"@apply bg-transparent border-none text-primary-600":true},".button.ghost:hover":{"@apply bg-primary-100":true},".button.success":{"@apply bg-success-500 border-success-500":true},".button.success:hover,\n.button.success:focus":{"@apply bg-success-400\r\n    border-success-400\r\n    ring-2\r\n    ring-success-200":true},".button.success:focus":{"@apply outline-2 outline-success-200":true},".button.success:active":{"@apply ring-4\r\n    ring-success-200":true},".button.warning":{"@apply bg-warning-500 border-warning-500":true},".button.warning:hover,\n.button.warning:focus":{"@apply bg-warning-400\r\n    border-warning-500\r\n    ring-2\r\n    ring-warning-200":true},".button.warning:focus":{"@apply outline-2 outline-warning-200":true},".button.warning:active":{"@apply ring-4\r\n    ring-warning-200":true},".button.emergency":{"@apply bg-emergency-500 border-emergency-500":true},".button.emergency:hover,\n.button.emergency:focus":{"@apply bg-emergency-400\r\n    border-emergency-400\r\n    ring-2\r\n    ring-emergency-200":true},".button.emergency:focus":{"@apply outline-2 outline-emergency-200":true},".button.emergency:active":{"@apply ring-4\r\n    ring-emergency-200":true},".button:disabled":{"@apply bg-slate-200 text-slate-900 border-slate-200":true},".button:disabled:hover":{"@apply ring-0 bg-slate-200":true},".button.outlined:disabled":{"@apply border-slate-900":true},".button.xs":{"@apply text-xs\r\n    h-4\r\n    px-2":true},".button.sm":{"@apply text-sm\r\n    h-6":true},".button.lg":{"@apply text-lg\r\n    h-12":true},".button.xl":{"@apply text-xl\r\n    h-16":true},".button.icon":{"@apply p-0\r\n    w-9\r\n    flex-none\r\n    truncate":true},".button.icon.xs":{"@apply text-xs\r\n    w-4":true},".button.icon.sm":{"@apply text-sm\r\n    w-6":true},".button.icon.lg":{"@apply text-xl\r\n    w-12":true},".button.icon.xl":{"@apply text-2xl\r\n    w-16":true},".button.icon svg":{"@apply h-3/5 w-auto":true},".button svg":{"@apply h-1/2 w-auto":true},".button_group":{"@apply inline-flex\r\n    flex-row\r\n    overflow-hidden\r\n    rounded-md":true},".button_group:not(.pill) *":{"@apply rounded-none":true},".button_group.pill":{"@apply gap-1":true},".button_group .button":{"@apply border-none ring-0":true},".card":{"@apply flex\r\n    overflow-hidden\r\n    rounded-md\r\n    bg-white\r\n    border\r\n    border-gray-300":true},".card.full":{"@apply h-full\r\n        w-full":true},".card:not(.horizontal)":{"@apply flex-col":true},".card:not(.horizontal) > :first-child":{"@apply border-b\r\n            border-gray-300":true},".card.horizontal":{"@apply flex-col-reverse md:flex-row":true},".card.horizontal > :first-child":{"@apply border-t\r\n            md:border-t-0\r\n            md:border-r\r\n            border-gray-300":true},".collapse":{"@apply flex\r\n    flex-col\r\n    p-1\r\n    rounded-md\r\n    overflow-hidden\r\n    bg-white\r\n    focus:bg-gray-50\r\n    hover:bg-gray-50\r\n    hover:ring-2\r\n    hover:ring-gray-100":true},".collapse *":{"@apply ease-in\r\n        duration-200":true},".collapse.extra_small":{"@apply text-xs":true},".collapse.extra_small .title":{"@apply h-4\r\n            px-2":true},".collapse.extra_small .title::after":{"@apply w-4":true},".collapse.small":{"@apply text-sm":true},".collapse.small .title":{"@apply h-6\r\n            px-2":true},".collapse.large .title":{"@apply text-lg\r\n            h-12":true},".collapse.large .title::after":{"@apply w-5":true},".collapse.extra_large .title":{"@apply text-xl\r\n            h-16":true},".collapse.extra_large .title::after":{"@apply w-6":true},".collapse .title":{"@apply h-10\r\n        px-2\r\n        rounded-md\r\n        w-full\r\n        inline-flex\r\n        justify-between\r\n        truncate\r\n        items-center\r\n        font-semibold\r\n        text-gray-600":true},".collapse.arrow .title::after":{"content":"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M17 13l-5 5m0 0l-5-5m5 5V6' /%3E%3C/svg%3E\")","@apply w-5 h-full flex justify-center items-center rotate-0 ease-in duration-100":true},".collapse.plus .title::after":{"content":"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 6v6m0 0v6m0-6h6m-6 0H6' /%3E%3C/svg%3E\")","@apply w-5 h-full flex justify-center items-center rotate-0 ease-in duration-100":true},".collapse:not(.close):focus.arrow .title::after, .collapse:not(.close).open.arrow .title::after, .collapse.open:focus.arrow .title::after, .collapse.open.open.arrow .title::after":{"@apply rotate-180":true},".collapse:not(.close):focus.plus .title::after, .collapse:not(.close).open.plus .title::after, .collapse.open:focus.plus .title::after, .collapse.open.open.plus .title::after":{"@apply rotate-45":true},".collapse:not(.close):focus .title, .collapse:not(.close).open .title, .collapse.open:focus .title, .collapse.open.open .title":{"@apply bg-purple-100 text-purple-600":true},".collapse:not(.close):focus .content, .collapse:not(.close).open .content, .collapse.open:focus .content, .collapse.open.open .content":{"@apply visible h-auto p-2 opacity-100":true},".collapse:not(.open):not(:focus) .content, .collapse:not(.open).close .content, .collapse.close:not(:focus) .content, .collapse.close.close .content":{"@apply hidden opacity-0":true},".collapse.outline":{"@apply outline-none border border-gray-300 focus:border-purple-600":true},".collapse.outline.hover:hover":{"@apply hover:border-purple-600":true},".menu":{"@apply flex flex-col flex-nowrap p-2":true},".menu h4":{"@apply w-full font-semibold text-gray-500 text-sm mb-1":true},".menu.divider *":{"@apply w-full":true},".menu.divider :not(:first-child)":{"@apply border-t border-gray-200":true},".menu.full":{"@apply w-full h-full m-0":true},".menu.horizontal":{"@apply flex-row flex-wrap":true},".menu.horizontal.divider :not(:first-child)":{"@apply border-l border-gray-200":true},".menu li":{"@apply w-full\r\n        text-left\r\n        rounded-md\r\n        truncate\r\n        text-gray-900 \r\n        bg-transparent \r\n        hover:bg-gray-100\r\n        hover:ring-2\r\n        hover:ring-gray-200\r\n        active:ring-4\r\n        active:ring-gray-200":true},".menu li *":{"@apply px-4\r\n            py-2\r\n            inline-flex\r\n            w-full\r\n            h-full":true},".notification":{"@apply flex \r\n    flex-row\r\n    items-center\r\n    gap-3\r\n    w-full \r\n    px-4\r\n    py-2 \r\n    bg-purple-100\r\n    text-primary-900\r\n    font-semibold\r\n    rounded-md":true},".notification *":{"@apply break-words whitespace-normal":true},".notification p":{"@apply flex-1":true},".notification.success":{"@apply bg-success-100 text-success-900":true},".notification.warning":{"@apply bg-warning-100 text-warning-900":true},".notification.emergency":{"@apply bg-emergency-100 text-emergency-900":true},".notification.toast":{"@apply w-60":true},".sidebar":{"@apply relative\r\n    inset-0\r\n    z-50\r\n    flex\r\n    flex-row\r\n    pointer-events-none":true},".sidebar *":{"@apply ease-out\r\n        duration-200\r\n        pointer-events-auto":true},".sidebar .toggle":{"@apply hidden":true},".sidebar .content":{"@apply h-full \r\n        w-72  \r\n        flex-none\r\n        bg-white \r\n        border-r \r\n        border-gray-300\r\n        relative\r\n        left-0\r\n        overflow-y-auto":true},"@media (max-width: 640px)":{".sidebar":{"position":"absolute"},".sidebar .content":{"left":"-100%"}},".sidebar .deadspace":{"@apply opacity-0\r\n        w-full\r\n        flex-1\r\n        bg-gray-900\r\n        relative\r\n        -left-full":true},".sidebar .toggle:checked ~ .content":{"@apply left-0":true},".sidebar .toggle:checked ~ .deadspace":{"@apply left-0\r\n            opacity-10":true},".tooltip":{"@apply relative inline-block":true},".tooltip.open:before, .tooltip:hover:before":{"@apply opacity-100":true},".tooltip::before":{"content":"attr(data-content)","@apply pointer-events-none w-max block absolute opacity-0 whitespace-nowrap text-sm bg-white border border-gray-300 text-gray-900 rounded-md px-2 py-1 transition delay-100 duration-100 ease-in-out":true},".tooltip.dark::before":{"@apply bg-gray-700 text-white border-0":true},".tooltip.success::before":{"@apply bg-success-500 text-white border-0":true},".tooltip.warning::before":{"@apply bg-warning-500 text-white border-0":true},".tooltip.emergency::before":{"@apply bg-emergency-500 text-white border-0":true},".tooltip.top::before":{"@apply left-1/2 -translate-x-1/2 bottom-full mb-2 z-10":true},".tooltip.bottom::before":{"@apply left-1/2 -translate-x-1/2 top-full mt-2 z-10":true},".tooltip.left::before":{"@apply top-1/2 -translate-y-1/2 right-full mr-2 z-10":true},".tooltip.right::before":{"@apply top-1/2 -translate-y-1/2 left-full ml-2 z-10":true}};
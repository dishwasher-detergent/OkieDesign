import Notifications, { NotificationSample } from "./Notifications"
import Breadcrumbs, { BreadcrumbSample } from "./Breadcrumbs"
import Badge, { BadgeSample } from "./Badge"
import Buttons, { ButtonSample } from "./Button"
import ButtonGroups, { ButtonGroupSample } from "./ButtonGroup"
import Collapse, { CollapseSample } from "./Collapse"
import Tooltips, { TooltipSample } from "./Tooltips"
import Samples from "./Layout/Documentation/Samples"
import Checkboxes, { CheckboxSample } from "./Form/Checkboxes"
import Radios, { RadioSample } from "./Form/Radios"
import Toggles, { ToggleSample } from "./Form/Toggles"
import Inputs, { InputSample } from "./Form/Inputs"
import Selects, { SelectSample } from "./Form/Selects"
import Textareas, { TextareaSample } from "./Form/Textareas"
import Ranges, { RangeSample } from "./Form/Ranges"
import Dropdown, { DropdownSample } from "./Dropdown"

const components = {
    content: {
        components: [
            {
                name: "Badges",
                link: "badges",
                component: Badge,
                sample: BadgeSample
            },
            {
                name: "Breadcrumbs",
                link: "breadcrumbs",
                component: Breadcrumbs,
                sample: BreadcrumbSample
            },
            {
                name: "Buttons",
                link: "buttons",
                component: Buttons,
                sample: ButtonSample
            },
            {
                name: "Button Groups",
                link: "buttongroups",
                component: ButtonGroups,
                sample: ButtonGroupSample
            },
            {
                name: "Notifications",
                link: "notifications",
                component: Notifications,
                sample: NotificationSample
            },
            {
                name: "Tooltips",
                link: "tooltips",
                component: Tooltips,
                sample: TooltipSample
            }
        ],
        componentsForm: [
            {
                name: "Checkboxes",
                link: "checkboxes",
                component: Checkboxes,
                sample: CheckboxSample
            },
            {
                name: "Radios",
                link: "radios",
                component: Radios,
                sample: RadioSample
            },
            {
                name: "Toggles",
                link: "toggles",
                component: Toggles,
                sample: ToggleSample
            },
            {
                name: "Inputs",
                link: "inputs",
                component: Inputs,
                sample: InputSample
            },
            {
                name: "Selects",
                link: "selects",
                component: Selects,
                sample: SelectSample
            },
            {
                name: "Textareas",
                link: "textareas",
                component: Textareas,
                sample: TextareaSample
            },
            {
                name: "Ranges",
                link: "ranges",
                component: Ranges,
                sample: RangeSample
            }
        ],
        componentsJS: [
            {
                name: "Collapses",
                link: "collapses",
                component: Collapse,
                sample: CollapseSample
            },
            {
                name: "Dropdowns",
                link: "dropdowns",
                component: Dropdown,
                sample: DropdownSample
            }
        ]
    }
}

export default components
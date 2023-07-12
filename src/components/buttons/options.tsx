
import { type FlyoutOptionsProps } from "../../types/Buttons/FlyoutOptions";

const enrollmentOptions: FlyoutOptionsProps[] = [
    { label: "Import students", divider: true, onClick: () => { alert("Import students"); } },
    { label: "Export empty template", divider: false, onClick: () => { alert("Export empty template"); } },
    { label: "Export template with data", divider: false, onClick: () => { alert("Export template with data"); } }
  ];

export { enrollmentOptions };
import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect"
import Menu from "./components/Menu";
import Projets from "./components/Projets";
import FormHandler from "./components/FormHandler";

window.Alpine = Alpine;

window.addEventListener('DOMContentLoaded', () => {
    const {alpineInitialized, Alpine} = window;
    if (alpineInitialized) {
        return;
    }

    window.alpineInitialized = true;
    const {data, start, plugin} = Alpine;
    plugin(intersect)
    data('Menu', Menu);
    data('Projets', Projets);
    data('FormHandler', FormHandler);
    start();
});

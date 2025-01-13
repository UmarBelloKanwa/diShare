import { Model } from "./model.js";
import { View } from "./view.js";
import { Controller } from "./controller.js";

import { renderUI as ui } from "./ui.js";
import { myAPIs as api } from "./webapi.js";

new Controller(
    Model,
    new View(
        window.ui = new ui(), 
        window.api = new api()
    )
);
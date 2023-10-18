import { defineConfig, presetAttributify, presetUno } from "unocss";
import { presetForms } from "@julr/unocss-preset-forms";

export default defineConfig({
    presets: [presetUno(), presetForms()],
});

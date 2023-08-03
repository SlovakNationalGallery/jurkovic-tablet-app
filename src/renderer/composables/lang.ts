import { ref } from 'vue'
import { Lang, TRANSLATIONS } from '../consts'
import _ from 'lodash'

const lang = ref<Lang>("sk")

export const trans = (path: string) => {
    return _.get(TRANSLATIONS[lang.value], path)
}

export function useLang() {
    const toggle = () => { lang.value === "sk" ? lang.value = "en" : lang.value = "sk" }
    return { toggle, lang, trans }
}
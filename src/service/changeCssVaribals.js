
export const changeCssVaribals = theme => {
    let root = document.querySelector(':root');

    root.style.setProperty('--color-yellow', `var(--theme-color-${theme})`);
    root.style.setProperty('--df-img', `var(--theme-bg-${theme})`);
}


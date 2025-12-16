export const show = (ref, message) => {
    const error = ref.current;
    if (error.classList.contains("hidden")) {
        error.classList.remove("hidden")
    }
    error.innerText = message;
}

export const hide = (ref) => {
    const error = ref.current;
    if (!error.classList.contains("hidden")) {
        error.classList.add("hidden");
    }
}
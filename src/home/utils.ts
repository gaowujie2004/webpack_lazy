export function getNow() {
    return Date.now();
}

export function syncSleep(duration: number) {
    const now = Date.now();
    while (Date.now() - now <= duration) {
        //
    }
}

console.log("home/utils run")

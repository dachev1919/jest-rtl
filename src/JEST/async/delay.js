// delay(() => 5 + 5, 1000).then(res => console.log(res)); // 10
module.exports = delay = (callback, ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(callback())
        }, ms);
    });
}
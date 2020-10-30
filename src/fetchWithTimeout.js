export default function (url, options, timeout = 3000) {
    const controller = new AbortController();
    const {signal} = controller;
    return Promise.race([
        fetch(url, {...options, signal}),
        new Promise((_, reject) =>
            setTimeout(() => {
                controller.abort();
                return reject(new Error('timeout'));
            }, timeout)
        )
    ]);
}
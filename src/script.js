(async () => {
    function submit(el) {
        if (
            el.match(
                /(^https:\/\/)|(^http:\/\/)|(^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+)|(^[A-z]+\.[A-z]+\/(.+))|(^[A-z]+\.[A-z]+\/)|(^[A-z]+\.[A-z]+)/
            )
        ) {
            window.location.href = el;
        } else {
            let value = el.match(/(youtube)|(yt)|(nyaa)|(github)/);
            if (value !== null) {
                switch (value[0]) {
                    case "youtube":
                        window.location.href = `https://www.youtube.com/results?search_query=${el}`;
                        break;
                    case "yt":
                        window.location.href = `https://www.youtube.com/results?search_query=${el}`;
                        break;
                    case "nyaa":
                        window.location.href = `https://nyaa.si/?f=0&c=0_0&q=${el}`;
                        break;
                    case "github":
                        window.location.href = `https://nyaa.si/?f=0&c=0_0&q=${el}`;
                        break;
                    case "gh":
                        window.location.href = `https://nyaa.si/?f=0&c=0_0&q=${el}`;
                        break;
                }
            } else {
                window.location.href = `https://google.com/search?q=${el}`;
            }
        }
    }

    const searchBox = document.querySelector(".search-box");

    searchBox.querySelector(".search-input").onkeypress = (_) => {
        if (_.key === "Enter") {
            if (_.target.value) submit(_.target.value);
        }
    };
    searchBox.querySelector(".search-ok").onclick = (_) => {
        let value = searchBox.querySelector(".search-input").value;
        if (value) submit(value);
    };
    onload = () => {
        document.querySelector('.search-input').focus()
    }
})();
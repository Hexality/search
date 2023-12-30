(async () => {
    function submit(el) {
        if (el.match(/(^https:\/\/)|(^http:\/\/)/)) {
            window.location.href = `${el}`;
        } else if (
            el.match(
                /(^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+)|(^[A-z]+\.[A-z]+\/(.+))|(^[A-z]+\.[A-z]+\/)|(^[A-z]+\.[A-z]+)/
            )
        ) {
            window.location.href = `http://${el}`;
        } else {
            let value = el.match(/(youtube)|(yt)|(nyaa)|(github)/);
            if (value !== null) {
                window.location.href = {
                    'youtube': `https://www.youtube.com/results?search_query=${el}`,
                    'yt': `https://www.youtube.com/results?search_query=${el}`,
                    'nyaa': `https://nyaa.si/?f=0&c=0_0&q=${el}`,
                    'github': `https://github.com/search?q=${el}`,
                    'gh': `https://github.com/search?q=${el}`
                } [escape(value[0]).toLowerCase()] ?? null
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
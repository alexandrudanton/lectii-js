const generateGrid = () => {
    $('.example').map((index, element) => {
        const noOfElements = $(element).data('no-of-elements');

        $(element).html(
            [...Array(noOfElements).keys()]
            .map(item => `<div class="item">${item + 1}</div>`)
            .join('')
        );
    })
};

const generateGridForDisplay = () => {
    $('.example').map((index, element) => {
        const noOfElements = $(element).data('no-of-elements');

        let grid = `<div class="example-[#]">\r\n    ${
            ([...Array(noOfElements).keys()]
            .map(item => `    <div class="item">${item + 1}</div>`)
            .join(`\r\n    `))
        }\r\n</div>`;

        let htmlContainer = $(element).closest('.subcontainer').prev('.code.html:not(.no-auto)')[0];

        if (htmlContainer) {
            $(htmlContainer).html(
                grid
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;")
            );
        }
    })
};

$(() => {
    generateGrid();
    generateGridForDisplay();

    $('.code').each((i, block) => {
        hljs.highlightBlock(block);
    });
});

console.log('JS working');
$(onReady);

function onReady() {
    console.log('on ready function');
    $('#searchButton').on('click', searchIt);

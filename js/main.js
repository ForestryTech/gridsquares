function generateGrid() {
    var gridDimensions = 0;
    var gridSize = getGridSize();
    $('div.container').remove();
    gridDimensions = 960 / getGridSize();
    
    createContainer();
    createRows(gridSize);
    createCells(gridSize);
    modifyCss(gridDimensions);
}

function getGridSize() {
    return $('#gSize').val();
}

function createContainer() {
    var $divToAdd = $("<div></div>");
    $('body').append($divToAdd);
    $divToAdd.addClass("container");
}

function createRows(numRows) {
    console.log(numRows);
    
    var i = 0;
    
    for(i = 1; i <= numRows; i++) {
        var $rowToAdd = $('<div></div>');
        $rowToAdd.addClass("row");
        $('.container').append($rowToAdd);
        $rowToAdd.attr("id", i);
    }    
}

function createCells(gridSize) {
    var curRow = 1;
    var i = 1;
    var x = 1;
    for(i = 1; i <= gridSize; i++) {
        $row = $('div#' + i);
        for(x = 1; x <= gridSize; x++) {
            var $cellToAdd = $("<div></div>");
            $row.append($cellToAdd);
            $cellToAdd.addClass("cell");
            $cellToAdd.hover(function() {
                $(this).css('background-color', 'black');
            });
        }
    }
}

function modifyCss(size) {
    var $row = $('div.row');
    var $cell = $('div.cell');
    var $container = $('div.container');
    var newSize = (size - 2) + "px";
    $container.height('960px');
    $container.width('960px');
    $container.css('margin', '30px auto');
    $row.height(size);
    $row.width('960px');
    $cell.height(newSize);
    $cell.width(newSize);
    $cell.css('background-color', 'lightgray');
    $cell.css('margin', '1px');
    $cell.css('display', 'inline-block');
}

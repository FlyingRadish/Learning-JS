/**
The word can be constructed from letters of sequentially adjacent cell,
where "adjacent" cells are those horizontally or vertically neighboring.
The same letter cell may not be used more than once.
**/
var exist = function(board, word) {
    for (var y = 0; y < board.length; y++) {
        for (var x = 0; x < board[y].length; x++) {
            if (board[y][x] == word[0]) {
                console.log("go", y, x);
                if (isMatch(board, x, y, word, 0)) {
                    return true;
                }
            }
        }
    }
    return false;
};

function isMatch(board, x, y, word, index, lastX, lastY) {
    if (y < 0 ||
        y >= board.length ||
        x < 0 ||
        x >= board[y].length
        || (x === lastX && y === lastY)) {
        return;
    }
    console.log(y, x);
    if (board[y][x] === word[index]) {
        index++;
        if (index == word.length) {
            return true;
        } else {
            board[y][x] = board[y][x].charCodeAt(0);
            if (isMatch(board, x + 1, y, word, index, x, y) ||
                isMatch(board, x - 1, y, word, index, x, y) ||
                isMatch(board, x, y + 1, word, index, x, y) ||
                isMatch(board, x, y - 1, word, index, x, y)) {
                board[y][x] = String.fromCharCode(board[y][x]);
                return true;
            } else {
                board[y][x] = String.fromCharCode(board[y][x]);
            }
        }
    }
}

function getBoard(data) {
    board = [];
    for (var i = 0; i < data.length; i++) {
        row = [];
        for (var j = 0; j < data[i].length; j++) {
            row.push(data[i].slice(j, j+1));
        }
        board.push(row);
    }
    return board;
}

/*****************************First version********************************/
var existOld = function(board, word) {
    for (var y = 0; y < board.length; y++) {
        for (var x = 0; x < board[y].length; x++) {
            if (board[y][x] == word[0]) {
                console.log(y, x);
                if (findNext(board, x, y, word, 1, null)) {
                    return true;
                }
            }
        }
    }
    return false;
};

function findNext(board, pos, word, currentIndex, lastPos) {
    // console.log("findNext");
    if (currentIndex == word.length) {
        return true;
    }
    var nextPos = [{
        x: pos.x + 1,
        y: pos.y
    }, {
        x: pos.x - 1,
        y: pos.y
    }, {
        x: pos.x,
        y: pos.y - 1
    }, {
        x: pos.x,
        y: pos.y + 1
    }]
    var matchArray = [];
    for (var i = 0; i < nextPos.length; i++) {
        if (nextPos[i].y < 0 || nextPos[i].y >= board.length) {
            continue;
        }
        if (nextPos[i].x < 0 || nextPos[i].x >= board[nextPos[i].y].length) {
            continue;
        }
        if (lastPos) {
            if (lastPos.x == nextPos[i].x && lastPos.y == nextPos[i].y) {
                continue;
            }
        }
        if (board[nextPos[i].y][nextPos[i].x] === word[currentIndex]) {
            matchArray.push(nextPos[i]);
            // console.log("correct:" + result + board[nextPos[i].y][nextPos[i].x]);
        } else {
            // console.log("wrong:" + result + board[nextPos[i].y][nextPos[i].x]);
        }
    }
    board[pos.y][pos.x] = board[pos.y][pos.x].charCodeAt(0);
    for (var j = 0; j < matchArray.length; j++) {
        if (findNext(board, matchArray[j], word, currentIndex + 1, pos)) {
            board[pos.y][pos.x] = String.fromCharCode(board[pos.y][pos.x]);
            return true;
        }
    }
    board[pos.y][pos.x] = String.fromCharCode(board[pos.y][pos.x]);
}

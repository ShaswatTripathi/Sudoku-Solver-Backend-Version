const express = require("express");
const app = express();

app.use(express.json());

app.get('/' , function(req,res){
    res.sendFile(__dirname +  "/index.html");
});

app.get('/styles.css', function(req, res) {
    res.sendFile(__dirname + "/styles.css");
}); 

app.get('/background.jpg' , function(req,res){
    res.sendFile(__dirname + "/background.jpg");
});

app.get('/client.js' , function(req,res){
    res.sendFile(__dirname + "/client.js");
});

app.post('/' , function(req,res){;
    for(var i = 1 ; i <= 9 ; ++i){
        for(var j = 1 ; j <= 9 ; ++j){
            board[i][j] = 0;
            x = i.toString() + j.toString(); 
            if(req.body[x].length > 0)board[i][j] = parseInt(req.body[x]);
        }
    }
    console.log(req.body);
    console.log(board);
    if(!isValid() || !f(1,1)){
        board[1][1] = -1;
    }
    const data = {
        11 : board[1][1],
        12 : board[1][2],
        13 : board[1][3],
        14 : board[1][4],
        15 : board[1][5],
        16 : board[1][6],
        17 : board[1][7],
        18 : board[1][8],
        19 : board[1][9],
        21 : board[2][1],
        22 : board[2][2],
        23 : board[2][3],
        24 : board[2][4],
        25 : board[2][5],
        26 : board[2][6],
        27 : board[2][7],
        28 : board[2][8],
        29 : board[2][9],
        31 : board[3][1],
        32 : board[3][2],
        33 : board[3][3],
        34 : board[3][4],
        35 : board[3][5],
        36 : board[3][6],
        37 : board[3][7],
        38 : board[3][8],
        39 : board[3][9],
        41 : board[4][1],
        42 : board[4][2],
        43 : board[4][3],
        44 : board[4][4],
        45 : board[4][5],
        46 : board[4][6],
        47 : board[4][7],
        48 : board[4][8],
        49 : board[4][9],
        51 : board[5][1],
        52 : board[5][2],
        53 : board[5][3],
        54 : board[5][4],
        55 : board[5][5],
        56 : board[5][6],
        57 : board[5][7],
        58 : board[5][8],
        59 : board[5][9],
        61 : board[6][1],
        62 : board[6][2],
        63 : board[6][3],
        64 : board[6][4],
        65 : board[6][5],
        66 : board[6][6],
        67 : board[6][7],
        68 : board[6][8],
        69 : board[6][9],
        71 : board[7][1],
        72 : board[7][2],
        73 : board[7][3],
        74 : board[7][4],
        75 : board[7][5],
        76 : board[7][6],
        77 : board[7][7],
        78 : board[7][8],
        79 : board[7][9],
        81 : board[8][1],
        82 : board[8][2],
        83 : board[8][3],
        84 : board[8][4],
        85 : board[8][5],
        86 : board[8][6],
        87 : board[8][7],
        88 : board[8][8],
        89 : board[8][9],
        91 : board[9][1],
        92 : board[9][2],
        93 : board[9][3],
        94 : board[9][4],
        95 : board[9][5],
        96 : board[9][6],
        97 : board[9][7],
        98 : board[9][8],
        99 : board[9][9]

    }
    console.log(board);
    res.send(data);
});


app.listen(3000 , function(){ 
    console.log("Server is listing on port 3000");
})

var board = [ 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
            
function cc(c,n){
    for(var i = 1 ; i <= 9 ; ++i){
        if(board[i][c] == n) return false;
    }
    return true;
}

function cr(r,n){
    for(var i = 1 ; i <= 9 ; ++i){
        if(board[r][i] == n) return false;
    }
    return true;
}

function cg(r,c,n){
    var sr = ((Math.floor((r-1) / 3))*3) + 1;
    var sc = ((Math.floor((c-1) / 3))*3) + 1;
    for(var i = sr ; i<=sr+2 ; ++i){
        for(var j = sc ; j<=sc+2 ; ++j){
            if(board[i][j]==n) return false;
        }
    }
    // console.log(r,c);
    return true;
}

function isValid(){
    for(let i=1;i<=9;++i){
        for(let j=1;j<=9;++j){
            if(board[i][j] == 0) continue;
            let x = board[i][j]; board[i][j] = 0;
            if(!(cr(i,x) && cc(j,x) && cg(i,j,x))){
                return false;                
            }
            board[i][j] = x;
        }
    }
    return true;
}

function f(a , b){
    // console.log(a,b);
    if(a==10) return true;
    if(board[a][b] != 0){
        if(b+1 <= 9) return f(a,b+1);
        return f(a+1,1);
    }
    for(var i = 1 ; i <= 9 ; ++i){
        if(cr(a,i) && cc(b,i) && cg(a,b,i)){
            // if(b==9) console.log("here");
            board[a][b] = i;
            var x;
            if(b+1 <= 9) x =  f(a,b+1);
            else x = f(a+1,1);
            if(x) return true;
        }
    }
    board[a][b] = 0;
    return false;
}
function solve(){
    // console.log(1);
    
}

